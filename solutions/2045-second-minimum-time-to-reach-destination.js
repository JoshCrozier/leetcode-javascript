/**
 * 2045. Second Minimum Time to Reach Destination
 * https://leetcode.com/problems/second-minimum-time-to-reach-destination/
 * Difficulty: Hard
 *
 * A city is represented as a bi-directional connected graph with n vertices where each vertex
 * is labeled from 1 to n (inclusive). The edges in the graph are represented as a 2D integer
 * array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex
 * ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has
 * an edge to itself. The time taken to traverse any edge is time minutes.
 *
 * Each vertex has a traffic signal which changes its color from green to red and vice versa
 * every change minutes. All signals change at the same time. You can enter a vertex at any
 * time, but can leave a vertex only when the signal is green. You cannot wait at a vertex
 * if the signal is green.
 *
 * The second minimum value is defined as the smallest value strictly larger than the minimum value.
 * - For example the second minimum value of [2, 3, 4] is 3, and the second minimum value of
 *   [2, 2, 4] is 4.
 *
 * Given n, edges, time, and change, return the second minimum time it will take to go from
 * vertex 1 to vertex n.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function(n, edges, time, change) {
  const adjList = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  const distances = Array.from({ length: n + 1 }, () => [Infinity, Infinity]);
  const queue = [[1, 0]];
  distances[1][0] = 0;

  while (queue.length) {
    const [node, currTime] = queue.shift();

    for (const next of adjList[node]) {
      const signalCycle = Math.floor(currTime / change);
      const isGreen = signalCycle % 2 === 0;
      let nextTime = currTime + time;

      if (!isGreen) {
        nextTime = (signalCycle + 1) * change + time;
      }

      if (nextTime < distances[next][0]) {
        distances[next][1] = distances[next][0];
        distances[next][0] = nextTime;
        queue.push([next, nextTime]);
      } else if (nextTime > distances[next][0] && nextTime < distances[next][1]) {
        distances[next][1] = nextTime;
        queue.push([next, nextTime]);
      }
    }
  }

  return distances[n][1];
};
