/**
 * 
 * @param {Record<string, string[]>} graph 
 * @param {string} from - which address are we coming from
 * @param {string} to - where are we going
 * @returns {string[]}
 */
const findRoute = (graph, from, to) => {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
      let {at, route} = work[i];
      for (let place of graph[at]) {
        if (place == to) {
          return route.concat(place);
        }
        if (!work.some(w => w.at == place)) {
          work.push({at: place, route: route.concat(place)});
        }
      }
    }
}
module.exports = findRoute;