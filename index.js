// Global reference to canvas and context
let ctx;
let canvas;

// -> Must be multiples of HUM_ROWS and NUM_COLS
const WIDTH = 480; //px
const HEIGHT = 480; //px
// -> Must be even multiples of 16
const NUM_ROWS = 32;
const NUM_COLS = 32;
const BOX_SIDE_LENGTH = WIDTH/NUM_ROWS; //px

let dirtyIndices = [];

let currentColor='#000000';
let DEFAULT_COLOR = "#FFFFFF"
let canvasData = new Array(NUM_ROWS*NUM_COLS).fill(DEFAULT_COLOR);

console.log(canvasData)

let button = document.getElementById("convert");

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'appDataServices.json', true); // Replace 'appDataServices' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}

// Set ctx and canvas variables, sets width and height of canvas.
function getCanvasAndContext() {
    // Set ctx and canvas variables, disable image smoothing
    canvas = document.getElementById('editor');
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled=false;

    // Set width and height of canvas
    canvas.width=NUM_COLS*BOX_SIDE_LENGTH+1; // +1 to display border
    canvas.height=NUM_ROWS*BOX_SIDE_LENGTH+1;
}

function drawGrid() {
    ctx.lineWidth = 0.5;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
    ctx.translate(0.5, 0.5); // make lines sharp

    for (var i = 0; i <= WIDTH; i += BOX_SIDE_LENGTH) {
        // draw vertical line HEIGHT length, x=i
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, HEIGHT);
        ctx.stroke();
        ctx.closePath();

        // draw horizontal line WIDTH length, y=i
        ctx.beginPath();
        ctx.moveTo(0, i)
        ctx.lineTo(WIDTH, i)
        ctx.stroke();
        ctx.closePath();
    }

    ctx.lineWidth = 0;
}

// Converts index to row and column no.
function idxToRowCol(idx) {
    let row=Math.floor(idx/NUM_ROWS);
    let col=idx%NUM_COLS;
    return {row, col};
}

// Converts coords to index
function coordsToIdx(X, Y) {
    let col = Math.floor(X/BOX_SIDE_LENGTH);
    let row = Math.floor(Y/BOX_SIDE_LENGTH);
    return row*NUM_ROWS+col;
}

// Triggered on click
function handleClick(e) { 
    let X = e.offsetX;
    let Y = e.offsetY;
    if ((X >= WIDTH || X <= 0) || (Y >= HEIGHT || Y <= 0)) return false;
    setData(coordsToIdx(X, Y), currentColor);
}

// Sets color of square from input
function setData(idx, color) {
    if (dirtyIndices.includes(idx)) return false;

    let currentColor = canvasData[idx];
    if (color !== currentColor) {
        canvasData[idx] = color;
    } else {
        canvasData[idx] = DEFAULT_COLOR;
    }

    dirtyIndices.push(idx);
}

// Draws data
function drawData() {
    for (var i = 0; i < dirtyIndices.length; i++) {
        let color = canvasData[dirtyIndices[i]];
        colorBox(idxToRowCol(dirtyIndices[i]), color);
    }

    dirtyIndices=[];
    drawGrid();
    requestAnimationFrame(drawData);
}

// Checks if input is valid row / column
const isValidCol = (col) => col >= 0 && col <= NUM_COLS - 1;
const isValidRow = (row) => row >= 0 && row <= NUM_ROWS - 1;

// Colours box with color
function colorBox(box, color) {
    const { row, col } = box;

    if (!isValidCol(col) || !isValidRow(row)) return false;

    ctx.fillStyle = color || currentColor;
    ctx.clearRect(col * BOX_SIDE_LENGTH, row * BOX_SIDE_LENGTH, BOX_SIDE_LENGTH, BOX_SIDE_LENGTH);
    ctx.beginPath();
    ctx.fillRect(col * BOX_SIDE_LENGTH, row * BOX_SIDE_LENGTH, BOX_SIDE_LENGTH, BOX_SIDE_LENGTH);
    ctx.closePath();
}

// Re-outlines box
function reOutline(row, col) {
    ctx.lineWidth = 0.5;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(0.5, 0.5);
    ctx.beginPath();
    ctx.moveTo(col * BOX_SIDE_LENGTH, row * BOX_SIDE_LENGTH);
    ctx.lineTo(col * BOX_SIDE_LENGTH, (row + 1) * BOX_SIDE_LENGTH);
    ctx.stroke();
    ctx.lineTo((col + 1) * BOX_SIDE_LENGTH, (row + 1) * BOX_SIDE_LENGTH);
    ctx.stroke();
    ctx.lineTo((col + 1) * BOX_SIDE_LENGTH, row * BOX_SIDE_LENGTH);
    ctx.stroke();
    ctx.lineTo(col * BOX_SIDE_LENGTH, row * BOX_SIDE_LENGTH);
    ctx.stroke();
    ctx.closePath();
}
  
// Reset canvas: mark all as dirty
function resetCanvas() {
    for (var i = 0; i < canvasData.length; i++) {
      canvasData[i] = DEFAULT_COLOR;
      dirtyIndices.push(i);
    }
}

function convert() {
    console.log(canvasData)
    let pos = {
        "block_class": "control",
        "description": "pos",
        "controlScript": {
            "abilityID": "6946F5A6-FA2D-4E5A-BD65-4431F5CE54D2-44913-00000D1425CAE41A"
        },
        "type": 123
    };

    let black = {
        "block_class": "control",
        "type": 123,
        "description": "black",
        "controlScript": {
            "abilityID": "07E84856-E023-4704-960A-07CD852D0E67-44913-00000D116E4FDE8A"
        }
    };

    let white = {
        "block_class": "control",
        "description": "white",
        "type": 123,
        "controlScript": {
            "abilityID": "17D18DE8-04D8-474B-AA64-F5E911081004-44913-00000D125C495BA5"
        }
    };

    let temp = [];
    temp.push(pos);
    let j = 0;

    for (var i = 1; i <= canvasData.length; i++) {
        console.log(i - 1)
        if(canvasData[i - 1] === "#000000") {
            temp.push(black);
        } else {
            temp.push(white);
        }

        if(j === 31) {
            temp.push(pos)
            j = 0;
        } else {
            j++
        }
    }

    console.log(temp)

    template.abilities[12].blocks = temp;

    document.getElementById('ResultsText').value = JSON.stringify(template);
}

// Binds listeners to functions
function addListeners() {
    canvas.addEventListener('click', handleClick);
    button.addEventListener('click', convert);
}

// Init editor.
function initEditor() {
    getCanvasAndContext();
    resetCanvas();
    addListeners();
}

// Start the program
window.onload = function() {
    initEditor();
    drawData();
}

