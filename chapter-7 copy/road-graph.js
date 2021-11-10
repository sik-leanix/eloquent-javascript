const roads = require('./roads');
function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
}
/**
 * @type {Record<string, string[]>}
 */
const roadGraph = buildGraph(roads);
  
module.exports = roadGraph;