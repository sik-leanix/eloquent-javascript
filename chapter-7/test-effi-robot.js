const effiRobot = require("./roboteffi");
const VillageState = require('./village-state');

/**
 * 
 * @param {VillageState} state 
 * @param {string[]} memory 
 * @returns 
 */
const runRobot = (state, robot, memory) => {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            return turn
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log('parcel amount', state.parcels.length)
        console.log('route length', memory.length)
    }
}

const testRobot = (amountOfRuns) => {
    for (let i = 0; i <= amountOfRuns; i++) {
        runRobot(VillageState.random(), effiRobot, []);
    }
}

testRobot(20);