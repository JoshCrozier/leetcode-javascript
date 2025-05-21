/**
 * 2359. Find Closest Node to Given Two Nodes
 * https://leetcode.com/problems/find-closest-node-to-given-two-nodes/
 * Difficulty: Medium
 *
 * You are given a directed graph of n nodes numbered from 0 to n - 1, where each node has at
 * most one outgoing edge.
 *
 * The graph is represented with a given 0-indexed array edges of size n, indicating that there
 * is a directed edge from node i to node edges[i]. If there is no outgoing edge from i, then
 * edges[i] == -1.
 *
 * You are also given two integers node1 and node2.
 *
 * Return the index of the node that can be reached from both node1 and node2, such that the maximum
 * between the distance from node1 to that node, and from node2 to that node is minimized. If there
 * are multiple answers, return the node with the smallest index, and if no possible answer exists,
 * return -1.
 *
 * Note that edges may contain cycles.
 */

/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
  const n = edges.length;
  const dist1 = new Array(n).fill(Infinity);
  const dist2 = new Array(n).fill(Infinity);

  computeDistances(node1, dist1);
  computeDistances(node2, dist2);

  let minDist = Infinity;
  let result = -1;

  for (let i = 0; i < n; i++) {
    if (dist1[i] !== Infinity && dist2[i] !== Infinity) {
      const maxDist = Math.max(dist1[i], dist2[i]);
      if (maxDist < minDist) {
        minDist = maxDist;
        result = i;
      }
    }
  }

  return result;

  function computeDistances(start, distances) {
    let current = start;
    let steps = 0;
    const visited = new Set();

    while (current !== -1 && !visited.has(current)) {
      distances[current] = steps++;
      visited.add(current);
      current = edges[current];
    }
  }
};
