const findRoute = require('./find-route');
const roadGraph = require('./road-graph');

/**
 * @typedef Parcel
 * @type {object}
 * @property {string} place - where to pick up the parcel
 * @property {string} address - where to bring the parcel (aka the recipient)
 */

/**
 * @typedef VillageState
 * @type {object}
 * @property {string} place - the next place the robot is moving to
 * @property {Parcel[]} parcels - parcels to be delivered
 */

/**
 * 
 * @param {VillageState} param0 
 * @param {string[]} route 
 * @returns {{
 *   direction: string
 *   memory: string[]
 * }}
 */
function effiRobot({place, parcels}, route) {
  /**
   * @param {Parcel[]} parcels 
   * @param {string} place 
   * @returns {Parcel[]}
   */
  function getPickedUpParcels(parcels, place) {
    const pickedUpParcels = [];
  	for (let i = 0; i < parcels.length; i++) {
      const parcelToTrack = parcels[i];
      if (parcelToTrack.place === place) {
        pickedUpParcels.push(parcelToTrack);
      }
    } 
    return pickedUpParcels;
  }
  
  /**
   * @param {Parcel[]} pickedUpParcels 
   * @param {string} place 
   * @returns {null|string[]} - the route which will drop off a picked up parcel at a house that is right next to the current location
   */
  function getRouteForDeliveringPickedUpParcelOnNearbyAddress(pickedUpParcels, place) {
    if (pickedUpParcels.length > 0) {
    	for (let i = 0; i < pickedUpParcels.length; i++) {
    	  const selectedParcelInIteration = pickedUpParcels[i];
      	const routeToAdress = findRoute(roadGraph, place, selectedParcelInIteration.address);
      	if (routeToAdress.length === 1) {
        	return routeToAdress
        }
      }
    }
    return null;
  }
  
  /**
   * @param {Parcel[]} parcels 
   * @param {string} place 
   * @returns {null|string[]} - the new route which goes to a parcel that's nearby
   */
  function getRouteToPickUpNearbyParcel(parcels, place) {
  	for (let i = 1; i < parcels.length; i++) {
      const selectedParcel = parcels[i];
      const routeToParcel = findRoute(roadGraph, place, selectedParcel.place);
      if (routeToParcel.length === 1) {
        return routeToParcel
      }
    }
    return null;
  }

  const nextRouteWithPickUp = getRouteToPickUpNearbyParcel(parcels, place);
  if (nextRouteWithPickUp !== null) {
    return {direction: nextRouteWithPickUp[0], memory: nextRouteWithPickUp.slice(1)};
  }

  const pickedUpParcels = getPickedUpParcels(parcels, place);
  const nextRouteWithDropOff = getRouteForDeliveringPickedUpParcelOnNearbyAddress(pickedUpParcels, place);
  if (nextRouteWithDropOff !== null) {
    return {direction: nextRouteWithDropOff[0], memory: nextRouteWithDropOff.slice(1)};
  }
  
  if (route.length == 0) { // the route length is null on the first call and while the robot is at a location where it is delivering parcels.
    const firstParcel = parcels[0]; // NOTE: this is where one could optimise again to pick the parcel that is closest
    if (firstParcel.place === place) {
      const routeToParcelRecipient = findRoute(roadGraph, place, firstParcel.address);
      return {direction: routeToParcelRecipient[0], memory: routeToParcelRecipient.slice(1)};
    } else {
      const routeToPickUpParcel = findRoute(roadGraph, place, firstParcel.place);
      return {direction: routeToPickUpParcel[0], memory: routeToPickUpParcel.slice(1)};
    }
  }

  return {
    direction: route[0],
    memory: route.slice(1)
  };
}

module.exports = effiRobot;