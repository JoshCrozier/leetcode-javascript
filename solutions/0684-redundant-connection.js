/**
 * 684. Redundant Connection
 * https://leetcode.com/problems/redundant-connection/
 * Difficulty: Medium
 *
 * In this problem, a tree is an undirected graph that is connected and has no cycles.
 *
 * You are given a graph that started as a tree with n nodes labeled from 1 to n, with
 * one additional edge added. The added edge has two different vertices chosen from 1
 * to n, and was not an edge that already existed. The graph is represented as an array
 * edges of length n where edges[i] = [ai, bi] indicates that there is an edge between
 * nodes ai and bi in the graph.
 *
 * Return an edge that can be removed so that the resulting graph is a tree of n nodes.
 * If there are multiple answers, return the answer that occurs last in the input.
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const adjacency = new Map();

  function traverse(node, target, prev) {
    if (node === target) {
      return true;
    }
    for (const nextNode of adjacency.get(node)) {
      if (nextNode !== prev && traverse(nextNode, target, node)) {
        return true;
      }
    }
    return false;
  }

  for (const edge of edges) {
    const [a, b] = edge;
    adjacency.set(a, !adjacency.has(a) ? [b] : [...adjacency.get(a), b]);
    adjacency.set(b, !adjacency.has(b) ? [a] : [...adjacency.get(b), a]);

    if (traverse(b, a, a)) {
      return [a, b];
    }
  }
};
