/**
 * 2192. All Ancestors of a Node in a Directed Acyclic Graph
 * https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/
 * Difficulty: Medium
 *
 * You are given a positive integer n representing the number of nodes of a Directed Acyclic
 * Graph (DAG). The nodes are numbered from 0 to n - 1 (inclusive).
 *
 * You are also given a 2D integer array edges, where edges[i] = [fromi, toi] denotes that there
 * is a unidirectional edge from fromi to toi in the graph.
 *
 * Return a list answer, where answer[i] is the list of ancestors of the ith node, sorted in
 * ascending order.
 *
 * A node u is an ancestor of another node v if u can reach v via a set of edges.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const ancestors = Array.from({ length: n }, () => new Set());

  for (const [from, to] of edges) {
    graph[to].push(from);
  }

  for (let i = 0; i < n; i++) {
    findAncestors(i);
  }

  return ancestors.map(set => [...set].sort((a, b) => a - b));

  function findAncestors(node) {
    if (ancestors[node].size > 0) return;

    for (const parent of graph[node]) {
      ancestors[node].add(parent);
      findAncestors(parent);
      for (const ancestor of ancestors[parent]) {
        ancestors[node].add(ancestor);
      }
    }
  }
};
