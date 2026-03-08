export const CONNECTIONS = [
  // { from: "MAIN_11KV_SWB1",  to: "PCC02", type: "fiber", fromSide: "top", toSide: "bottom" },
  { from: "MAIN_11KV_SWB1",  to: "PCC04", type: "fiber", fromSide: "top", toSide: "top", waypoints: [
    { x: 97.5, y: 800 },   // go up from mid-top of SWB1
    { x: 662.5, y: 800 },  // 90 degree right to PCC04 middle
    { x: 662.5, y: 850 },  // go down to PCC04 top level
    { x: 662.5, y: 850 }   // connect to PCC04 middle
  ]},
  { from: "PCC01", to: "PCC02", type: "fiber", fromSide: "top", toSide: "top", waypoints: [
    { x: 400, y: 200 },  // mid-top of PCC01, go up
    { x: 400, y: 5 },    // 90 degree up to top level
    { x: 975, y: 5 },    // 90 degree right to PCC02 mid-top
    { x: 975, y: 20 }    // connect to PCC02 top
  ]},
  // { from: "PCC02", to: "PCC01", type: "fiber", fromSide: "left", toSide: "top", routing: "orthogonal" },
  { from: "PCC02", to: "Utility_Area", type: "ethernet", fromSide: "right", toSide: "left", routing: "orthogonal" },

  // { from: "PCC02", to: "PCC08", type: "fiber", fromSide: "bottom", toSide: "top" },
  { from: "PCC07", to: "PCC08", type: "fiber", fromSide: "top", toSide: "top", waypoints: [
    { x: 1775, y: 750 },  // straight up from PCC07 top
    { x: 1500, y: 750 },  // 90 degree left
    { x: 1500, y: 370 },  // straight up
    { x: 1755, y: 370 },  // 90 degree right
    { x: 1755, y: 390 },  // straight down to PCC08 top level
    { x: 1950, y: 390 }   // 90 degree right to PCC08 mid-top
  ]},

  { from: "PCC02", to: "PCC03", type: "fiber", fromSide: "top", toSide: "top", waypoints: [
    { x: 1010 , y: 20 },   // go up from mid-top
    { x: 1010, y: 10 },  // 90 degree right
    { x: 1010, y: 5  }, 
    { x: 1775, y: 5 }  // straight down  
  ]},
  { from: "PCC04", to: "PCC05", type: "fiber", fromSide: "top", toSide: "top", waypoints: [
    { x: 662.5, y: 800 },   // go up from middle of PCC04
    { x: 975, y: 800 },     // 90 degree right
    { x: 975, y: 850 } ,
     { x: 975, y: 850 }      // go down to mid-top of PCC05
  ]},
  { from: "PCC05", to: "PCC06", type: "fiber", fromSide: "top", toSide: "top", waypoints: [
    { x: 975, y: 800 },    // go up from mid-top
    { x: 1462.5, y: 800 }, // 90 degree right to PCC06 middle
    { x: 1462.5, y: 850 },
     { x: 1462.5, y: 850 } // go down to middle-top of PCC06
  ]},
  { from: "PCC06", to: "PCC07", type: "fiber", fromSide: "top", toSide: "top", waypoints: [
    { x: 1462.5, y: 800 }, // go up from middle of PCC06
    { x: 1775, y: 800 },   // 90 degree right
    { x: 1775, y: 850 },   { x: 1775, y: 850 }  // go down to mid-top of PCC07
  ]},
  { from: "PCC08", to: "PCC03", type: "fiber", fromSide: "top", toSide: "top", waypoints: [
    { x: 1775, y: 350 },  // straight up from PCC08 top
    { x: 1500, y: 350 },  // 90 degree right
    { x: 1500, y: 50 },   // straight up
    { x: 1700, y: 50 },   // 90 degree left
      // straight down to PCC03 top level
    { x: 1700, y: 80 }    // 90 degree right to PCC03 mid-top
  ]},
];
