var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025txfor",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2025/half_field.png",
      "clickRestriction": "one",
      "dimensions": "6 6",
      "allowableResponses": "1 7 13 19 25 31",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool"
    },
    { "name": "Coral L1",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Auto Scoring Position",
      "code": "asp",
      "type": "clickable_image",
      "filename": "2025/reef.png",
      "dimensions": "6 6",
      "allowableResponses": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 17 18 19 20 23 24 25 26 27 28 29 30 31 32 33 34 35 36",
      "shape": "circle 5 black red true"
    },
    { "name": "Reef Algae",
      "code": "ara",
      "type":"radio",
      "choices": {
        "ir": "In Robot<br>",
        "of": "On Floor<br>",
        "x": "Not attempted"
        },
            "defaultValue": "x"
      }
  ],
  "teleop": [
    { "name": "Coral L1",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "Processor Score",
      "code": "tps",
      "type": "counter"
    },
    { "name": "Net Score",
      "code": "tns",
      "type": "counter"
    },
    { "name": "Coral Pickup",
      "code": "cpu",
      "type": "radio",
      "choices": {
        "s": "HP Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
       "required":"true"
    },
    { "name": "Algae Pickup",
      "code": "apu",
      "type": "radio",
      "choices": {
        "s": "Reef<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Barge Timer",
      "code": "ebt",
      "type": "timer"
    },
    { "name": "Final Robot Status",
      "code": "efs",
      "type":"radio",
      "choices": {
        "bp": "Parked<br>",
        "bh": "Failed High Climb<br>",
        "bl": "Failed Low Climb<br>",
        "bs": "High Climb<br>",
        "bd": "Low Climb<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
  
  {"name": "Attained Coopertition Pt",
      "code": "cop",
      "type": "bool"
    },
    { "name": "Algae Left in Reef",
      "code": "alr",
      "type": "number",
      "min": 0,
      "max": 9,
      "defaultValue": 0
    }
    ],
  "postmatch": [
    
    { "name": "Defense",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Bad<br>",
        "g": "Good<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
