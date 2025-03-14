/**
 * 785. Is Graph Bipartite?
 * https://leetcode.com/problems/is-graph-bipartite/
 * Difficulty: Medium
 *
 * There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1.
 * You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent
 * to. More formally, for each v in graph[u], there is an undirected edge between node u and
 * node v. The graph has the following properties:
 * - There are no self-edges (graph[u] does not contain u).
 * - There are no parallel edges (graph[u] does not contain duplicate values).
 * - If v is in graph[u], then u is in graph[v] (the graph is undirected).
 * - The graph may not be connected, meaning there may be two nodes u and v such that there is
 *   no path between them.
 *
 * A graph is bipartite if the nodes can be partitioned into two independent sets A and B such
 * that every edge in the graph connects a node in set A and a node in set B.
 *
 * Return true if and only if it is bipartite.
 */

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const n = graph.length;
  const colors = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    if (colors[i] === -1 && !colorGraph(i, 0, graph, colors)) {
      return false;
    }
  }

  return true;
};

function colorGraph(start, color, graph, colors) {
  const queue = [start];
  colors[start] = color;

  while (queue.length > 0) {
    const node = queue.shift();
    const nextColor = 1 - colors[node];

    for (const neighbor of graph[node]) {
      if (colors[neighbor] === -1) {
        colors[neighbor] = nextColor;
        queue.push(neighbor);
      } else if (colors[neighbor] !== nextColor) {
        return false;
      }
    }
  }

  return true;
}
