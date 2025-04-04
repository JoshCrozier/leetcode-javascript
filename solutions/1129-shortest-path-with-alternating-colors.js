/**
 * 1129. Shortest Path with Alternating Colors
 * https://leetcode.com/problems/shortest-path-with-alternating-colors/
 * Difficulty: Medium
 *
 * You are given an integer n, the number of nodes in a directed graph where the nodes are
 * labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be
 * self-edges and parallel edges.
 *
 * You are given two arrays redEdges and blueEdges where:
 * - redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai
 *   to node bi in the graph, and
 * - blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj
 *   to node vj in the graph.
 *
 * Return an array answer of length n, where each answer[x] is the length of the shortest
 * path from node 0 to node x such that the edge colors alternate along the path, or -1
 * if such a path does not exist.
 */

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  const redGraph = Array(n).fill().map(() => new Set());
  const blueGraph = Array(n).fill().map(() => new Set());

  for (const [from, to] of redEdges) redGraph[from].add(to);
  for (const [from, to] of blueEdges) blueGraph[from].add(to);

  const distances = Array(n).fill().map(() => [Infinity, Infinity]);
  const queue = [[0, 0], [0, 1]];
  distances[0] = [0, 0];

  while (queue.length) {
    const [node, color] = queue.shift();
    const nextGraph = color ? redGraph : blueGraph;
    const nextColor = 1 - color;

    for (const nextNode of nextGraph[node]) {
      if (distances[nextNode][nextColor] === Infinity) {
        distances[nextNode][nextColor] = distances[node][color] + 1;
        queue.push([nextNode, nextColor]);
      }
    }
  }

  return distances.map(([red, blue]) => {
    const min = Math.min(red, blue);
    return min === Infinity ? -1 : min;
  });
};
