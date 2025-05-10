/**
 * 2065. Maximum Path Quality of a Graph
 * https://leetcode.com/problems/maximum-path-quality-of-a-graph/
 * Difficulty: Hard
 *
 * There is an undirected graph with n nodes numbered from 0 to n - 1 (inclusive). You are given a
 * 0-indexed integer array values where values[i] is the value of the ith node. You are also given
 * a 0-indexed 2D integer array edges, where each edges[j] = [uj, vj, timej] indicates that there
 * is an undirected edge between the nodes uj and vj, and it takes timej seconds to travel between
 * the two nodes. Finally, you are given an integer maxTime.
 *
 * A valid path in the graph is any path that starts at node 0, ends at node 0, and takes at most
 * maxTime seconds to complete. You may visit the same node multiple times. The quality of a valid
 * path is the sum of the values of the unique nodes visited in the path (each node's value is
 * added at most once to the sum).
 *
 * Return the maximum quality of a valid path.
 *
 * Note: There are at most four edges connected to each node.
 */

/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @param {number} maxTime
 * @return {number}
 */
var maximalPathQuality = function(values, edges, maxTime) {
  const n = values.length;
  const adjList = Array.from({ length: n }, () => []);

  for (const [u, v, time] of edges) {
    adjList[u].push([v, time]);
    adjList[v].push([u, time]);
  }

  let result = 0;
  const initialVisited = new Set([0]);

  dfs(0, maxTime, values[0], initialVisited);

  return result;

  function dfs(node, timeLeft, quality, visited) {
    if (timeLeft < 0) return 0;
    if (node === 0) {
      result = Math.max(result, quality);
    }

    for (const [nextNode, travelTime] of adjList[node]) {
      const newVisited = new Set(visited);
      const newQuality = newVisited.has(nextNode) ? quality : quality + values[nextNode];
      newVisited.add(nextNode);
      dfs(nextNode, timeLeft - travelTime, newQuality, newVisited);
    }

    return result;
  }
};
