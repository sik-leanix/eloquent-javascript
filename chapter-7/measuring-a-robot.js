const VillageState = require('./village-state');
const roadGraph = require('./road-graph');
const effiRobot = require('./roboteffi');
const findRoute = require('./find-route');

function routeRobot(state, memory) {
    const mailRoute = [
        "Alice's House", "Cabin", "Alice's House", "Bob's House",
        "Town Hall", "Daria's House", "Ernie's House",
        "Grete's House", "Shop", "Grete's House", "Farm",
        "Marketplace", "Post Office"
    ];
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
}

function compareRobots(robot1, memory1, robot2, memory2, amountOfRuns) {
    /** @param {VillageState} state */
    const testFunction = (state, robot, memory) => {
        for (let turn = 0;; turn++) {
            if (state.parcels.length == 0) {
                return turn
            }
            let robotResult = robot(state, memory);
            state = state.move(robotResult.direction);
            memory = robotResult.memory;
        }
   }
    let amountOfTurnsRobot1 = 0;
    let amountOfTurnsRobot2 = 0;
    for (let i = 0; i <= amountOfRuns; i++) {
        amountOfTurnsRobot1 += testFunction(VillageState.random(), robot1, memory1);
        amountOfTurnsRobot2 += testFunction(VillageState.random(), robot2, memory2); 
    } 
    return `
        ${robot1.name} needs ${Math.floor(amountOfTurnsRobot1 / amountOfRuns)} turns in avarage
        ${robot2.name} needs ${Math.floor(amountOfTurnsRobot2 / amountOfRuns)} turns in avarage`;
  }

  //console.log("routeRobot vs GoalOrientedRobot", compareRobots(routeRobot, [], goalOrientedRobot, [], 1));
  
  console.log("effiRobot vs GoalOrientedRobot", compareRobots(effiRobot, [], goalOrientedRobot, [], 1000));