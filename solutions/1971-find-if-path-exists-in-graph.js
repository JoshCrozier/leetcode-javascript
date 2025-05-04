/**
 * 1971. Find if Path Exists in Graph
 * https://leetcode.com/problems/find-if-path-exists-in-graph/
 * Difficulty: Easy
 *
 * There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to
 * n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges,
 * where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and
 * vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an
 * edge to itself.
 *
 * You want to determine if there is a valid path that exists from vertex source to vertex
 * destination.
 *
 * Given edges and the integers n, source, and destination, return true if there is a valid
 * path from source to destination, or false otherwise.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Set();
  const queue = [source];

  while (queue.length) {
    const vertex = queue.shift();
    if (vertex === destination) return true;
    if (visited.has(vertex)) continue;
    visited.add(vertex);

    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return false;
};
