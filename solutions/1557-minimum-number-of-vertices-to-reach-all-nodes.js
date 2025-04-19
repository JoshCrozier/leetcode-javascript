/**
 * 1557. Minimum Number of Vertices to Reach All Nodes
 * https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
 * Difficulty: Medium
 *
 * Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges
 * where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.
 *
 * Find the smallest set of vertices from which all nodes in the graph are reachable. It's
 * guaranteed that a unique solution exists.
 *
 * Notice that you can return the vertices in any order.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
  const hasIncomingEdge = new Array(n).fill(false);
  for (const [_, to] of edges) {
    hasIncomingEdge[to] = true;
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (!hasIncomingEdge[i]) {
      result.push(i);
    }
  }

  return result;
};
