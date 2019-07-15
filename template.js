let template = {
    "uuid": "10b7yl61ct",
    "stageSize": {
      "width": 414,
      "height": 736
    },
    "scenes": [
      {
        "objects": [
          "C2FFD67D-10C7-4E71-A783-E12FF00AB23A-44913-00000D116E48FB71"
        ],
        "name": "Scene 1"
      }
    ],
    "version": 30,
    "traits": [],
    "rules": [
      {
        "ruleBlockType": 6000,
        "id": "01C202DD-DD07-48C4-9E21-E7CCCC57A8E2-44913-00000D116E51314E",
        "objectID": "",
        "name": "",
        "abilityID": "50842FC0-7E5C-48CD-9D80-CC02BA302A29-44913-00000D116E4BD970",
        "parameters": [
          {
            "defaultValue": "",
            "value": "",
            "datum": {
              "type": 7000,
              "block_class": "operator",
              "description": "Game Starts"
            },
            "key": "",
            "type": 52
          }
        ]
      },
      {
        "ruleBlockType": 6000,
        "id": "625CB6BA-367C-40FB-91E9-4600270CC284-44913-00000D116E515EB9",
        "objectID": "",
        "name": "",
        "abilityID": "96F5F445-0171-4FAC-86E0-172937958CAB-44913-00000D116E4C191D",
        "parameters": [
          {
            "defaultValue": "",
            "value": "",
            "key": "",
            "datum": {
              "type": 7000,
              "block_class": "operator",
              "description": "Game Starts"
            },
            "type": 52
          }
        ]
      },
      {
        "ruleBlockType": 6000,
        "id": "83B6F3AA-8AAD-4C5D-B255-1A71E46EA24F-44913-00000D116E517860",
        "objectID": "",
        "abilityID": "23ABB49A-3A51-4A23-889F-C7C557109881-44913-00000D116E4C6CB3",
        "name": "",
        "parameters": [
          {
            "defaultValue": "",
            "value": "",
            "key": "",
            "datum": {
              "block_class": "operator",
              "type": 7001,
              "description": "is Tapped",
              "params": [
                {
                  "defaultValue": "",
                  "value": "",
                  "key": "",
                  "type": 50,
                  "variable": "FF05AA3F-FEE1-4F22-B789-0B08F27901C2-44913-00000D116E4AAE79"
                }
              ]
            },
            "type": 52
          }
        ]
      },
      {
        "ruleBlockType": 6000,
        "id": "3E962633-C2D8-4B26-85DE-C972668B386D-44913-00000D116E519C73",
        "abilityID": "A06B61B7-7F68-4CE1-A334-AC598D6C2D51-44913-00000D116E4E3B87",
        "name": "",
        "objectID": "",
        "parameters": [
          {
            "defaultValue": "",
            "value": "",
            "key": "",
            "datum": {
              "block_class": "conditionalOperator",
              "type": 1000,
              "description": "=",
              "params": [
                {
                  "defaultValue": "7",
                  "value": "7",
                  "key": "",
                  "datum": {
                    "HSTraitTypeKey": 2003,
                    "HSTraitIDKey": "1CA898A2-FD89-4DF0-9383-F76E12D73551-44913-00000D116E51BDD0",
                    "HSTraitObjectParameterTypeKey": 8004,
                    "description": "Invisibility as a %"
                  },
                  "type": 42
                },
                {
                  "defaultValue": "7",
                  "value": "0",
                  "key": "=",
                  "type": 42
                }
              ]
            },
            "type": 52
          }
        ]
      },
      {
        "ruleBlockType": 6000,
        "id": "9A473827-A755-400B-ACCB-1D210EF20F01-44913-00000D116E51CE03",
        "objectID": "",
        "name": "",
        "abilityID": "B749CC7A-85D3-4643-8BDC-CDA85207D405-44913-00000D116E4E93FB",
        "parameters": [
          {
            "datum": {
              "block_class": "operator",
              "type": 7010,
              "description": "Bumps",
              "params": [
                {
                  "defaultValue": "",
                  "value": "",
                  "key": "",
                  "type": 50,
                  "variable": "A47A3C43-6B8A-405F-87E7-D4748245548C-44913-00000D116E4AF36E"
                },
                {
                  "defaultValue": "",
                  "value": "",
                  "key": "bumps",
                  "type": 50,
                  "variable": "894D1D62-78D6-43DD-8439-1D49246D0F72-44913-00000D116E4B084A"
                }
              ]
            },
            "value": "",
            "defaultValue": "",
            "key": "",
            "type": 52
          }
        ]
      },
      {
        "ruleBlockType": 6000,
        "id": "29665B54-0AE9-460E-A4EB-D4D5BC96FF89-44913-00000D116E51E8A9",
        "abilityID": "81BF8B59-8C18-47DB-8762-B67082FB83C3-44913-00000D116E4EFBFD",
        "name": "",
        "objectID": "",
        "parameters": [
          {
            "defaultValue": "",
            "value": "",
            "key": "",
            "datum": {
              "block_class": "conditionalOperator",
              "type": 1000,
              "description": "=",
              "params": [
                {
                  "defaultValue": "7",
                  "value": "7",
                  "key": "",
                  "datum": {
                    "HSTraitTypeKey": 2006,
                    "HSTraitIDKey": "0B92CA41-D43A-4691-BE28-BFF0B49DD2FF-44913-00000D116E52001D",
                    "HSTraitObjectParameterTypeKey": 8004,
                    "description": "Clone Index"
                  },
                  "type": 42
                },
                {
                  "defaultValue": "7",
                  "value": "2",
                  "key": "=",
                  "type": 42
                }
              ]
            },
            "type": 52
          }
        ]
      },
      {
        "ruleBlockType": 6000,
        "id": "C6AD5F63-3F04-4002-B790-21EB1102CF6E-44913-00000D116E520EBF",
        "abilityID": "48D34272-7138-47E3-B3CA-DAAE28DDB2FE-44913-00000D116E4F67AE",
        "name": "",
        "objectID": "",
        "parameters": [
          {
            "defaultValue": "",
            "value": "",
            "key": "",
            "datum": {
              "block_class": "conditionalOperator",
              "type": 1000,
              "description": "=",
              "params": [
                {
                  "defaultValue": "7",
                  "value": "7",
                  "key": "",
                  "type": 42
                },
                {
                  "defaultValue": "7",
                  "value": "7",
                  "key": "=",
                  "type": 42
                }
              ]
            },
            "type": 52
          }
        ]
      },
      {
        "ruleBlockType": 6000,
        "id": "9CDEF335-72D8-44BB-B10F-9BE5A2943567-44913-00000D116E522708",
        "abilityID": "450E1501-96B7-44CE-B867-DE8BA555BF97-44913-00000D116E4F7BA1",
        "objectID": "",
        "name": "",
        "parameters": [
          {
            "datum": {
              "block_class": "conditionalOperator",
              "type": 1004,
              "description": "and",
              "params": [
                {
                  "defaultValue": "",
                  "value": "",
                  "key": "",
                  "datum": {
                    "block_class": "conditionalOperator",
                    "type": 1003,
                    "description": "＞",
                    "params": [
                      {
                        "defaultValue": "8",
                        "value": "8",
                        "key": "",
                        "datum": {
                          "HSTraitIDKey": "21AE6BD8-9B90-4222-9C7A-74F2FABE2A9B-44913-00000D116E52485B",
                          "HSTraitTypeKey": 3004,
                          "description": "Tilt Left %"
                        },
                        "type": 42
                      },
                      {
                        "defaultValue": "7",
                        "value": "10",
                        "key": "＞",
                        "type": 42
                      }
                    ]
                  },
                  "type": 49
                },
                {
                  "defaultValue": "",
                  "value": "",
                  "key": "and",
                  "datum": {
                    "block_class": "conditionalOperator",
                    "type": 1003,
                    "description": "＞",
                    "params": [
                      {
                        "defaultValue": "8",
                        "value": "",
                        "key": "",
                        "datum": {
                          "type": 8004,
                          "variable": "89D03D97-E01E-4549-B98E-53048BED86C1-34757-00036ADE79BC8B7A",
                          "description": "Variable"
                        },
                        "type": 42
                      },
                      {
                        "defaultValue": "7",
                        "value": "0",
                        "key": "＞",
                        "type": 42
                      }
                    ]
                  },
                  "type": 49
                }
              ]
            },
            "value": "",
            "key": "",
            "defaultValue": "",
            "type": 52
          }
        ]
      },
      {
        "ruleBlockType": 6000,
        "id": "73D21B31-CFED-4C57-B2AB-5712631210DB-44913-00000D116E526EC7",
        "abilityID": "330F1F7B-3A4F-4523-89FE-B1C57AC6017D-44913-00000D116E4FB23D",
        "objectID": "",
        "name": "",
        "parameters": [
          {
            "defaultValue": "",
            "value": "",
            "key": "",
            "datum": {
              "block_class": "conditionalOperator",
              "type": 1003,
              "description": "＞",
              "params": [
                {
                  "defaultValue": "8",
                  "value": "8",
                  "key": "",
                  "datum": {
                    "HSTraitIDKey": "4F08ED92-F25E-4EC4-AB86-0456C5A4C549-44913-00000D116E5286EF",
                    "HSTraitTypeKey": 3004,
                    "description": "Tilt Left %"
                  },
                  "type": 42
                },
                {
                  "defaultValue": "7",
                  "value": "10",
                  "key": "＞",
                  "type": 42
                }
              ]
            },
            "type": 52
          }
        ]
      },
      {
        "ruleBlockType": 6000,
        "id": "9D5B0A60-7879-4775-AB19-30D47525316A-44913-00000D116E4904EB",
        "objectID": "C2FFD67D-10C7-4E71-A783-E12FF00AB23A-44913-00000D116E48FB71",
        "name": "",
        "abilityID": "708DA9B5-D6F8-460B-BE9C-8F6C2693FA19-44913-00000D116E4FD1CF",
        "parameters": [
          {
            "defaultValue": "",
            "value": "",
            "key": "",
            "datum": {
              "type": 7000,
              "block_class": "operator",
              "description": "Game Starts"
            },
            "type": 52
          }
        ]
      }
    ],
    "eventParameters": [
      {
        "id": "E9ACE170-C9D4-4A0A-9C00-5BA6FD2EE80F-44913-00000D116E4A93A0",
        "blockType": 8003,
        "description": "📱"
      },
      {
        "id": "FF05AA3F-FEE1-4F22-B789-0B08F27901C2-44913-00000D116E4AAE79",
        "description": "📱",
        "blockType": 8003
      },
      {
        "id": "40D366F0-E11C-4B53-A947-9C9F774B5810-44913-00000D116E4AC6F1",
        "description": "📱",
        "blockType": 8003
      },
      {
        "description": "📱",
        "id": "9B3FDA55-4F82-4F9D-8891-B43A381986F4-44913-00000D116E4ADC4F",
        "blockType": 8003
      },
      {
        "id": "A47A3C43-6B8A-405F-87E7-D4748245548C-44913-00000D116E4AF36E",
        "blockType": 8004,
        "description": "Self"
      },
      {
        "id": "894D1D62-78D6-43DD-8439-1D49246D0F72-44913-00000D116E4B084A",
        "blockType": 8002,
        "description": "📱 Edge"
      },
      {
        "id": "5AD718FA-6076-4293-8429-043BD6AD8C2B-44913-00000D116E4B6709",
        "description": "Self",
        "blockType": 8004
      },
      {
        "description": "Self",
        "id": "A94CECBF-A81F-4CDA-A2AE-7F79143DF101-44913-00000D116E4B7849",
        "blockType": 8004
      },
      {
        "description": "📱",
        "id": "801DBC4A-9692-4AD9-B70F-A2FF68338E4E-44913-00000D116E4B877C",
        "blockType": 8003
      },
      {
        "id": "10C27DC7-F2C3-4E2E-84CF-CC4253F31351-44913-00000D116E4B9636",
        "description": "📱",
        "blockType": 8003
      }
    ],
    "playerVersion": "1.0.2",
    "edited_at": "2019-07-14T21:26:54+1000",
    "customRules": [],
    "objects": [
      {
        "height": "50",
        "xPosition": "256.5",
        "objectID": "C2FFD67D-10C7-4E71-A783-E12FF00AB23A-44913-00000D116E48FB71",
        "width": "66",
        "text": "",
        "filename": "text-object.png",
        "type": 1,
        "rules": [
          "9D5B0A60-7879-4775-AB19-30D47525316A-44913-00000D116E4904EB"
        ],
        "name": "Text",
        "yPosition": "387"
      }
    ],
    "baseObjectScale": 0.5,
    "fontSize": 72,
    "abilities": [
      {
        "blocks": [
          {
            "controlScript": {
              "abilityID": "D65BC362-E745-4C4C-BDC1-AB5AE0853B05-44913-00000D116E4BF2A0"
            },
            "block_class": "control",
            "description": "Draw a Trail",
            "type": 26,
            "parameters": [
              {
                "defaultValue": "HSB(289,56,44)",
                "value": "HSB(306,19,20)",
                "key": "color",
                "type": 44
              },
              {
                "defaultValue": "10",
                "value": "3000",
                "key": "width",
                "type": 43
              }
            ]
          }
        ],
        "createdAt": 528311636.47971,
        "abilityID": "50842FC0-7E5C-48CD-9D80-CC02BA302A29-44913-00000D116E4BD970"
      },
      {
        "blocks": [
          {
            "block_class": "method",
            "description": "Move Forward",
            "type": 23,
            "parameters": [
              {
                "defaultValue": "100",
                "value": "1",
                "key": "",
                "type": 42
              }
            ]
          }
        ],
        "createdAt": 528311646.60278,
        "abilityID": "D65BC362-E745-4C4C-BDC1-AB5AE0853B05-44913-00000D116E4BF2A0"
      },
      {
        "blocks": [
          {
            "block_class": "method",
            "description": "Set Invisibility",
            "type": 47,
            "parameters": [
              {
                "defaultValue": "50",
                "value": "100",
                "key": "percent",
                "type": 42
              }
            ]
          },
          {
            "description": "Repeat",
            "block_class": "control",
            "type": 120,
            "controlScript": {
              "abilityID": "4A0652F2-40DA-4BF6-94B3-79C5042C3632-44913-00000D116E4C4B90"
            },
            "parameters": [
              {
                "defaultValue": "5",
                "value": "300",
                "key": "times",
                "type": 42
              }
            ]
          }
        ],
        "createdAt": 528312426.53578,
        "abilityID": "96F5F445-0171-4FAC-86E0-172937958CAB-44913-00000D116E4C191D"
      },
      {
        "blocks": [
          {
            "type": 53,
            "block_class": "method",
            "description": "Create a Clone of This Object"
          }
        ],
        "createdAt": 528312426.53605,
        "abilityID": "4A0652F2-40DA-4BF6-94B3-79C5042C3632-44913-00000D116E4C4B90"
      },
      {
        "blocks": [
          {
            "block_class": "method",
            "description": "Set Size",
            "type": 51,
            "parameters": [
              {
                "defaultValue": "110",
                "value": "25",
                "key": "percent",
                "type": 42
              }
            ]
          },
          {
            "block_class": "method",
            "description": "Set Speed",
            "type": 34,
            "parameters": [
              {
                "defaultValue": "1000",
                "value": "1000",
                "key": "to",
                "type": 42
              }
            ]
          },
          {
            "block_class": "method",
            "description": "Set Position",
            "type": 41,
            "parameters": [
              {
                "defaultValue": "200",
                "value": "200",
                "key": "to x",
                "datum": {
                  "HSTraitIDKey": "BAC2C080-B6FE-4942-BFA0-5CD364C52796-44913-00000D116E4D241A",
                  "HSTraitTypeKey": 3006,
                  "description": "Last Touch X"
                },
                "type": 42
              },
              {
                "defaultValue": "200",
                "value": "200",
                "key": "y",
                "datum": {
                  "HSTraitTypeKey": 3007,
                  "HSTraitIDKey": "192B1B24-8CD8-4397-BF55-B78CA9FA8FFF-44913-00000D116E4D43DD",
                  "description": "Last Touch Y"
                },
                "type": 42
              }
            ]
          },
          {
            "block_class": "method",
            "description": "Set Color",
            "type": 54,
            "parameters": [
              {
                "defaultValue": "HSB(289,56,44)",
                "value": "HSB(289,56,44)",
                "key": "",
                "datum": {
                  "block_class": "operator",
                  "type": 4004,
                  "description": "Random",
                  "params": [
                    {
                      "defaultValue": "1",
                      "value": "6",
                      "key": "",
                      "type": 45
                    },
                    {
                      "defaultValue": "100",
                      "value": "9",
                      "key": "to",
                      "type": 46
                    }
                  ]
                },
                "type": 44
              }
            ]
          },
          {
            "block_class": "method",
            "type": 39,
            "description": "Set Angle",
            "parameters": [
              {
                "defaultValue": "30",
                "value": "30",
                "key": "",
                "datum": {
                  "block_class": "operator",
                  "type": 4004,
                  "description": "Random",
                  "params": [
                    {
                      "defaultValue": "1",
                      "value": "0",
                      "key": "",
                      "type": 45
                    },
                    {
                      "defaultValue": "100",
                      "value": "360",
                      "key": "to",
                      "type": 46
                    }
                  ]
                },
                "type": 42
              }
            ]
          },
          {
            "block_class": "method",
            "type": 47,
            "description": "Set Invisibility",
            "parameters": [
              {
                "defaultValue": "50",
                "value": "0",
                "key": "percent",
                "type": 42
              }
            ]
          },
          {
            "block_class": "method",
            "description": "Move Forward",
            "type": 23,
            "parameters": [
              {
                "defaultValue": "100",
                "value": "100",
                "key": "",
                "datum": {
                  "block_class": "operator",
                  "type": 4004,
                  "description": "Random",
                  "params": [
                    {
                      "defaultValue": "1",
                      "value": "0",
                      "key": "",
                      "type": 45
                    },
                    {
                      "defaultValue": "100",
                      "value": "200",
                      "key": "to",
                      "type": 46
                    }
                  ]
                },
                "type": 42
              }
            ]
          },
          {
            "block_class": "method",
            "type": 34,
            "description": "Set Speed",
            "parameters": [
              {
                "defaultValue": "1000",
                "value": "50",
                "key": "to",
                "type": 42
              }
            ]
          },
          {
            "block_class": "method",
            "type": 28,
            "description": "Change Y by",
            "parameters": [
              {
                "defaultValue": "100",
                "value": "-50",
                "key": "",
                "type": 42
              }
            ]
          },
          {
            "block_class": "method",
            "type": 47,
            "description": "Set Invisibility",
            "parameters": [
              {
                "defaultValue": "50",
                "value": "100",
                "key": "percent",
                "type": 42
              }
            ]
          }
        ],
        "createdAt": 528312426.53671,
        "abilityID": "23ABB49A-3A51-4A23-889F-C7C557109881-44913-00000D116E4C6CB3"
      },
      {
        "createdAt": 528312426.53922,
        "blocks": [
          {
            "description": "Repeat",
            "block_class": "control",
            "type": 120,
            "controlScript": {
              "abilityID": "459300C3-D778-4971-9337-A577CC305AA1-44913-00000D116E4E4D4F"
            },
            "parameters": [
              {
                "defaultValue": "5",
                "value": "50",
                "key": "times",
                "type": 42
              }
            ]
          }
        ],
        "abilityID": "A06B61B7-7F68-4CE1-A334-AC598D6C2D51-44913-00000D116E4E3B87"
      },
      {
        "blocks": [
          {
            "block_class": "method",
            "type": 47,
            "description": "Set Invisibility",
            "parameters": [
              {
                "defaultValue": "50",
                "value": "50",
                "key": "percent",
                "datum": {
                  "block_class": "operator",
                  "type": 4000,
                  "description": "+",
                  "params": [
                    {
                      "defaultValue": "2",
                      "value": "2",
                      "key": "",
                      "datum": {
                        "HSTraitTypeKey": 2003,
                        "HSTraitIDKey": "BC27C255-FE31-4D09-B0EE-3BE4B879715B-44913-00000D116E4E820E",
                        "HSTraitObjectParameterTypeKey": 8004,
                        "description": "Invisibility as a %"
                      },
                      "type": 42
                    },
                    {
                      "defaultValue": "3",
                      "value": "2",
                      "key": "+",
                      "type": 42
                    }
                  ]
                },
                "type": 42
              }
            ]
          }
        ],
        "createdAt": 528312426.53933,
        "abilityID": "459300C3-D778-4971-9337-A577CC305AA1-44913-00000D116E4E4D4F"
      },
      {
        "createdAt": 530739202.21755,
        "blocks": [
          {
            "block_class": "method",
            "type": 45,
            "description": "Set",
            "parameters": [
              {
                "defaultValue": "",
                "value": "",
                "key": "",
                "datum": {
                  "type": 8004,
                  "variable": "89D03D97-E01E-4549-B98E-53048BED86C1-34757-00036ADE79BC8B7A",
                  "description": "Variable"
                },
                "type": 47
              },
              {
                "defaultValue": "10",
                "value": "10",
                "key": "to",
                "datum": {
                  "block_class": "operator",
                  "type": 4002,
                  "description": "×",
                  "params": [
                    {
                      "defaultValue": "2",
                      "value": "-1",
                      "key": "",
                      "type": 42
                    },
                    {
                      "defaultValue": "3",
                      "value": "3",
                      "key": "×",
                      "datum": {
                        "type": 8004,
                        "variable": "89D03D97-E01E-4549-B98E-53048BED86C1-34757-00036ADE79BC8B7A",
                        "description": "Variable"
                      },
                      "type": 42
                    }
                  ]
                },
                "type": 48
              }
            ]
          }
        ],
        "abilityID": "B749CC7A-85D3-4643-8BDC-CDA85207D405-44913-00000D116E4E93FB"
      },
      {
        "blocks": [
          {
            "block_class": "method",
            "type": 41,
            "description": "Set Position",
            "parameters": [
              {
                "defaultValue": "200",
                "value": "200",
                "key": "to x",
                "datum": {
                  "block_class": "operator",
                  "type": 4001,
                  "description": "−",
                  "params": [
                    {
                      "defaultValue": "5",
                      "value": "5",
                      "key": "",
                      "datum": {
                        "HSTraitIDKey": "B7B57EAC-4808-40D3-9C20-3EF37557C3DD-44913-00000D116E4F1F39",
                        "HSTraitTypeKey": 3000,
                        "description": "Width"
                      },
                      "type": 42
                    },
                    {
                      "defaultValue": "2",
                      "value": "2",
                      "key": "−",
                      "datum": {
                        "HSTraitTypeKey": 2001,
                        "HSTraitIDKey": "68C9AE6A-314D-426D-8596-F9ABF08BDCBF-44913-00000D116E4F2F39",
                        "HSTraitObjectParameterTypeKey": 8005,
                        "description": "X Position"
                      },
                      "type": 42
                    }
                  ]
                },
                "type": 42
              },
              {
                "defaultValue": "200",
                "value": "",
                "key": "y",
                "datum": {
                  "block_class": "operator",
                  "type": 4001,
                  "description": "−",
                  "params": [
                    {
                      "defaultValue": "5",
                      "value": "5",
                      "key": "",
                      "datum": {
                        "HSTraitIDKey": "C8131460-E023-4A4E-B11F-9A1332793C0A-44913-00000D116E4F4B97",
                        "HSTraitTypeKey": 3001,
                        "description": "Height"
                      },
                      "type": 42
                    },
                    {
                      "defaultValue": "2",
                      "value": "",
                      "key": "−",
                      "datum": {
                        "HSTraitTypeKey": 2002,
                        "HSTraitIDKey": "0B5A48FC-8CAC-48B3-AB2F-2C6A7172DB33-44913-00000D116E4F5B18",
                        "HSTraitObjectParameterTypeKey": 8005,
                        "description": "Y Position"
                      },
                      "type": 42
                    }
                  ]
                },
                "type": 42
              }
            ]
          }
        ],
        "createdAt": 530740532.08221,
        "abilityID": "81BF8B59-8C18-47DB-8762-B67082FB83C3-44913-00000D116E4EFBFD"
      },
      {
        "blocks": [
          {
            "block_class": "method",
            "type": 40,
            "description": "Set Text",
            "parameters": [
              {
                "defaultValue": "",
                "value": "",
                "key": "to",
                "type": 53
              },
              {
                "defaultValue": "HSB(306,19,20)",
                "value": "HSB(306,19,20)",
                "key": "color",
                "type": 44
              }
            ]
          }
        ],
        "createdAt": 530742600.65835,
        "abilityID": "48D34272-7138-47E3-B3CA-DAAE28DDB2FE-44913-00000D116E4F67AE"
      },
      {
        "createdAt": 530742841.57042,
        "blocks": [
          {
            "block_class": "method",
            "type": 45,
            "description": "Set",
            "parameters": [
              {
                "defaultValue": "",
                "value": "",
                "key": "",
                "datum": {
                  "type": 8004,
                  "variable": "89D03D97-E01E-4549-B98E-53048BED86C1-34757-00036ADE79BC8B7A",
                  "description": "Variable"
                },
                "type": 47
              },
              {
                "defaultValue": "10",
                "value": "-",
                "key": "to",
                "datum": {
                  "block_class": "operator",
                  "type": 4002,
                  "description": "×",
                  "params": [
                    {
                      "defaultValue": "2",
                      "value": "-1",
                      "key": "",
                      "type": 42
                    },
                    {
                      "defaultValue": "3",
                      "value": "",
                      "key": "×",
                      "datum": {
                        "type": 8004,
                        "variable": "89D03D97-E01E-4549-B98E-53048BED86C1-34757-00036ADE79BC8B7A",
                        "description": "Variable"
                      },
                      "type": 42
                    }
                  ]
                },
                "type": 48
              }
            ]
          }
        ],
        "abilityID": "450E1501-96B7-44CE-B867-DE8BA555BF97-44913-00000D116E4F7BA1"
      },
      {
        "createdAt": 530742964.15538,
        "blocks": [
          {
            "block_class": "method",
            "description": "Increase",
            "type": 44,
            "parameters": [
              {
                "defaultValue": "",
                "value": "",
                "key": "",
                "datum": {
                  "type": 8004,
                  "variable": "89D03D97-E01E-4549-B98E-53048BED86C1-34757-00036ADE79BC8B7A",
                  "description": "Variable"
                },
                "type": 47
              },
              {
                "defaultValue": "1",
                "value": "-1",
                "key": "by",
                "type": 48
              }
            ]
          }
        ],
        "abilityID": "330F1F7B-3A4F-4523-89FE-B1C57AC6017D-44913-00000D116E4FB23D"
      },
      {
        "createdAt": 584792272.046097,
        "blocks": [
          
        ],
        "abilityID": "708DA9B5-D6F8-460B-BE9C-8F6C2693FA19-44913-00000D116E4FD1CF"
      },
      {
        "blocks": [
          {
            "controlScript": {
              "abilityID": "22896748-CEDF-4248-BEC4-8A4A7DF44591-44913-00000D116E502591"
            },
            "block_class": "control",
            "description": "Draw a Trail",
            "type": 26,
            "parameters": [
              {
                "defaultValue": "HSB(288,57,43)",
                "value": "HSB(288,57,43)",
                "key": "color",
                "datum": {
                  "block_class": "operator",
                  "type": 5001,
                  "description": "RGB",
                  "params": [
                    {
                      "defaultValue": "34",
                      "value": "0",
                      "key": "R",
                      "type": 42
                    },
                    {
                      "defaultValue": "246",
                      "value": "0",
                      "key": "G",
                      "type": 42
                    },
                    {
                      "defaultValue": "217",
                      "value": "0",
                      "key": "B",
                      "type": 42
                    }
                  ]
                },
                "type": 44
              },
              {
                "defaultValue": "10",
                "value": "7",
                "key": "width",
                "type": 43
              }
            ]
          },
          {
            "block_class": "method",
            "description": "Move Forward",
            "type": 23,
            "parameters": [
              {
                "defaultValue": "100",
                "value": "8",
                "key": "",
                "type": 42
              }
            ]
          }
        ],
        "abilityID": "07E84856-E023-4704-960A-07CD852D0E67-44913-00000D116E4FDE8A",
        "name": "black",
        "createdAt": 584792299.350239
      },
      {
        "createdAt": 584792316.993914,
        "blocks": [
          {
            "block_class": "method",
            "type": 23,
            "description": "Move Forward",
            "parameters": [
              {
                "defaultValue": "100",
                "value": "1",
                "key": "",
                "type": 42
              }
            ]
          }
        ],
        "abilityID": "22896748-CEDF-4248-BEC4-8A4A7DF44591-44913-00000D116E502591"
      },
      {
        "createdAt": 0,
        "abilityID": "DE917303-67FB-4856-8668-8C50AC7A6FF6-44913-00000D116E50BF30"
      },
      {
        "createdAt": 0,
        "abilityID": "F9AE589C-ADF2-46A9-89DB-4CF0F2BF0E54-44913-00000D116E50C2B2"
      },
      {
        "createdAt": 0,
        "abilityID": "DAFA038A-1E5F-409B-85F8-76481D4F2555-44913-00000D116E50C6C9"
      },
      {
        "createdAt": 0,
        "abilityID": "AD04132B-0AC2-4361-B673-35B8330E595E-44913-00000D116E50CB91"
      },
      {
        "createdAt": 0,
        "abilityID": "3F914FF6-EC74-4135-A67A-C7AADE8A942A-44913-00000D116E50CF25"
      },
      {
        "createdAt": 0,
        "abilityID": "13FA45D5-FC4A-400F-8900-85EAF35A82FA-44913-00000D116E50D359"
      },
      {
        "createdAt": 584795638.04065,
        "abilityID": "8E38CAB2-0C62-45AA-8279-14585CE640B7-44913-00000D116E50D679"
      },
      {
        "createdAt": 584795638.043788,
        "abilityID": "94B30676-F4EA-4E64-905E-430ACDBC3522-44913-00000D116E50D8FC"
      },
      {
        "createdAt": 584795638.045089,
        "abilityID": "5342DAAE-C0D4-4F1E-8E6C-05A75F6EEACF-44913-00000D116E50DBD1"
      },
      {
        "createdAt": 584795638.04608,
        "abilityID": "EF4B3C4C-1187-432D-AF94-98E4958AEFB3-44913-00000D116E50DEA0"
      },
      {
        "createdAt": 584795638.0481,
        "abilityID": "12C01977-4660-4C31-AA00-F5AE8FA560E3-44913-00000D116E50E186"
      },
      {
        "createdAt": 584795638.049141,
        "abilityID": "30E1A0C2-0912-4E2B-BE12-34D48BE3D14A-44913-00000D116E50E40D"
      },
      {
        "createdAt": 584795638.050491,
        "abilityID": "242BA154-76AC-4D6D-A68A-D3912232B91F-44913-00000D116E50E68F"
      },
      {
        "createdAt": 584795638.051561,
        "abilityID": "A0E59732-76FE-42DA-A84B-FE19C1735C95-44913-00000D116E50E957"
      },
      {
        "createdAt": 584795638.055317,
        "abilityID": "D87E1780-F069-4B81-9CA0-804C11CF7A19-44913-00000D116E50ECCD"
      },
      {
        "createdAt": 584795638.056883,
        "abilityID": "EE489D19-13F0-4DC4-B48F-1FF5B8EB9A5C-44913-00000D116E50EF57"
      },
      {
        "blocks": [
          {
            "type": 26,
            "block_class": "control",
            "description": "Draw a Trail",
            "controlScript": {
              "abilityID": "1C94E72A-9225-44B0-9E64-73B7CC670E99-44913-00000D1294332146"
            },
            "parameters": [
              {
                "defaultValue": "HSB(288,57,43)",
                "value": "HSB(288,57,43)",
                "key": "color",
                "datum": {
                  "block_class": "operator",
                  "type": 5001,
                  "description": "RGB",
                  "params": [
                    {
                      "defaultValue": "34",
                      "value": "255",
                      "key": "R",
                      "type": 42
                    },
                    {
                      "defaultValue": "246",
                      "value": "255",
                      "key": "G",
                      "type": 42
                    },
                    {
                      "defaultValue": "217",
                      "value": "255",
                      "key": "B",
                      "type": 42
                    }
                  ]
                },
                "type": 44
              },
              {
                "defaultValue": "10",
                "value": "7",
                "key": "width",
                "type": 43
              }
            ]
          },
          {
            "block_class": "method",
            "description": "Move Forward",
            "type": 23,
            "parameters": [
              {
                "defaultValue": "100",
                "value": "8",
                "key": "",
                "type": 42
              }
            ]
          }
        ],
        "abilityID": "17D18DE8-04D8-474B-AA64-F5E911081004-44913-00000D125C495BA5",
        "name": "white",
        "createdAt": 584795803.889343
      },
      {
        "createdAt": 584795837.962324,
        "blocks": [
          {
            "block_class": "method",
            "type": 23,
            "description": "Move Forward",
            "parameters": [
              {
                "defaultValue": "100",
                "value": "1",
                "key": "",
                "type": 42
              }
            ]
          }
        ],
        "abilityID": "B26EB5E1-866F-4244-BC6D-6135EDDCDB2D-44913-00000D128E4473AF"
      },
      {
        "createdAt": 584795843.496401,
        "abilityID": "02E0F355-A614-404B-B40A-90E5656E70C6-44913-00000D12943346C4"
      },
      {
        "createdAt": 584795843.496692,
        "blocks": [
          {
            "block_class": "method",
            "description": "Move Forward",
            "type": 23,
            "parameters": [
              {
                "defaultValue": "100",
                "value": "1",
                "key": "",
                "type": 42
              }
            ]
          }
        ],
        "abilityID": "1C94E72A-9225-44B0-9E64-73B7CC670E99-44913-00000D1294332146"
      },
      {
        "blocks": [
          {
            "block_class": "method",
            "type": 41,
            "description": "Set Position",
            "parameters": [
              {
                "defaultValue": "200",
                "value": "20",
                "key": "to x",
                "type": 42
              },
              {
                "defaultValue": "200",
                "value": "",
                "key": "y",
                "datum": {
                  "block_class": "operator",
                  "type": 4001,
                  "description": "−",
                  "params": [
                    {
                      "defaultValue": "5",
                      "value": "600",
                      "key": "",
                      "type": 42
                    },
                    {
                      "defaultValue": "2",
                      "value": "2",
                      "key": "−",
                      "datum": {
                        "block_class": "operator",
                        "type": 4002,
                        "description": "×",
                        "params": [
                          {
                            "defaultValue": "2",
                            "value": "10.5",
                            "key": "",
                            "type": 42
                          },
                          {
                            "defaultValue": "3",
                            "value": "3",
                            "key": "×",
                            "datum": {
                              "type": 8003,
                              "variable": "AB96268A-A119-4391-AA9A-C4E990327B2B-44913-00000D14C3A0EF13",
                              "description": "Variable"
                            },
                            "type": 42
                          }
                        ]
                      },
                      "type": 42
                    }
                  ]
                },
                "type": 42
              }
            ]
          },
          {
            "block_class": "method",
            "type": 44,
            "description": "Increase",
            "parameters": [
              {
                "defaultValue": "",
                "value": "",
                "key": "",
                "datum": {
                  "type": 8003,
                  "variable": "AB96268A-A119-4391-AA9A-C4E990327B2B-44913-00000D14C3A0EF13",
                  "description": "Variable"
                },
                "type": 47
              },
              {
                "defaultValue": "1",
                "value": "1",
                "key": "by",
                "type": 48
              }
            ]
          }
        ],
        "abilityID": "6946F5A6-FA2D-4E5A-BD65-4431F5CE54D2-44913-00000D1425CAE41A",
        "name": "pos",
        "createdAt": 584796123.784284
      }
    ],
    "customObjects": [],
    "variables": [
      {
        "type": 8000,
        "objectIdString": "5F3372E2-51AE-4949-A805-2E2C58BC6C4E-34757-00036ADE79BC4E3E",
        "name": "Vertical velocity"
      },
      {
        "type": 8000,
        "objectIdString": "89D03D97-E01E-4549-B98E-53048BED86C1-34757-00036ADE79BC8B7A",
        "name": "Horizontal velocity"
      },
      {
        "name": "Bounce height",
        "objectIdString": "28D46291-73DB-4BCC-923B-E9CC70C5BDA3-34757-00036ADE79BCA35F",
        "type": 8000
      },
      {
        "name": "line",
        "objectIdString": "AB96268A-A119-4391-AA9A-C4E990327B2B-44913-00000D14C3A0EF13",
        "type": 8003
      }
    ]
  }