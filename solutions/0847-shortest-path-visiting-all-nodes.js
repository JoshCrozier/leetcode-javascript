/**
 * 847. Shortest Path Visiting All Nodes
 * https://leetcode.com/problems/shortest-path-visiting-all-nodes/
 * Difficulty: Hard
 *
 * You have an undirected, connected graph of n nodes labeled from 0 to n - 1. You are given an
 * array graph where graph[i] is a list of all the nodes connected with node i by an edge.
 *
 * Return the length of the shortest path that visits every node. You may start and stop at any
 * node, you may revisit nodes multiple times, and you may reuse edges.
 */

/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
  const n = graph.length;

  if (n === 1) return 0;

  const allVisited = (1 << n) - 1;
  const queue = [];
  const visited = new Set();

  for (let i = 0; i < n; i++) {
    const initialState = (1 << i);
    queue.push([i, initialState, 0]);
    visited.add(`${i},${initialState}`);
  }

  while (queue.length > 0) {
    const [node, state, distance] = queue.shift();
    if (state === allVisited) {
      return distance;
    }
    for (const neighbor of graph[node]) {
      const newState = state | (1 << neighbor);
      const key = `${neighbor},${newState}`;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([neighbor, newState, distance + 1]);
      }
    }
  }

  return -1;
};
