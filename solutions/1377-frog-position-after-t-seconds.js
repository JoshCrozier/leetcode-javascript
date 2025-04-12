/**
 * 1377. Frog Position After T Seconds
 * https://leetcode.com/problems/frog-position-after-t-seconds/
 * Difficulty: Hard
 *
 * Given an undirected tree consisting of n vertices numbered from 1 to n. A frog starts
 * jumping from vertex 1. In one second, the frog jumps from its current vertex to another
 * unvisited vertex if they are directly connected. The frog can not jump back to a visited
 * vertex. In case the frog can jump to several vertices, it jumps randomly to one of them
 * with the same probability. Otherwise, when the frog can not jump to any unvisited vertex,
 * it jumps forever on the same vertex.
 *
 * The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi]
 * means that exists an edge connecting the vertices ai and bi.
 *
 * Return the probability that after t seconds the frog is on the vertex target. Answers
 * within 10-5 of the actual answer will be accepted.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
  const adjacencyList = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of edges) {
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  }

  return explore(1, 0, 1, new Set());

  function explore(vertex, time, probability, visited) {
    if (time > t) return 0;
    if (vertex === target && time === t) return probability;
    if (vertex === target && adjacencyList[vertex].every(v => visited.has(v))) return probability;

    const unvisitedNeighbors = adjacencyList[vertex].filter(v => !visited.has(v));
    if (unvisitedNeighbors.length === 0) return 0;

    const nextProbability = probability / unvisitedNeighbors.length;
    visited.add(vertex);

    for (const neighbor of unvisitedNeighbors) {
      const result = explore(neighbor, time + 1, nextProbability, visited);
      if (result > 0) return result;
    }

    return 0;
  }
};
