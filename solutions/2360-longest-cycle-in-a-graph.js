/**
 * 2360. Longest Cycle in a Graph
 * https://leetcode.com/problems/longest-cycle-in-a-graph/
 * Difficulty: Hard
 *
 * You are given a directed graph of n nodes numbered from 0 to n - 1, where each node has at
 * most one outgoing edge.
 *
 * The graph is represented with a given 0-indexed array edges of size n, indicating that
 * there is a directed edge from node i to node edges[i]. If there is no outgoing edge from
 * node i, then edges[i] == -1.
 *
 * Return the length of the longest cycle in the graph. If no cycle exists, return -1.
 *
 * A cycle is a path that starts and ends at the same node.
 */

/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
  const n = edges.length;
  const visited = new Array(n).fill(false);
  let result = -1;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      findCycle(i, 0, []);
    }
  }

  return result;

  function findCycle(node, steps, path) {
    if (visited[node]) {
      const cycleStart = path.indexOf(node);
      if (cycleStart !== -1) {
        result = Math.max(result, steps - cycleStart);
      }
      return;
    }

    visited[node] = true;
    path.push(node);

    if (edges[node] !== -1) {
      findCycle(edges[node], steps + 1, path);
    }

    path.pop();
  }
};
