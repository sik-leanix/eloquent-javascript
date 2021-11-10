const roadGraph = require('./road-graph');

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}


module.exports = class VillageState {
    static random(parcelCount = 5) {
        let parcels = [];
        for (let i = 0; i < parcelCount; i++) {
          let address = randomPick(Object.keys(roadGraph));
          let place;
          do {
            place = randomPick(Object.keys(roadGraph));
          } while (place == address);
          parcels.push({place, address});
        }
        return new VillageState("Post Office", parcels);
    }

    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) {
                    return p;
                }
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}