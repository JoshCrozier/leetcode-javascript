/**
 * 2368. Reachable Nodes With Restrictions
 * https://leetcode.com/problems/reachable-nodes-with-restrictions/
 * Difficulty: Medium
 *
 * There is an undirected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.
 *
 * You are given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates
 * that there is an edge between nodes ai and bi in the tree. You are also given an integer
 * array restricted which represents restricted nodes.
 *
 * Return the maximum number of nodes you can reach from node 0 without visiting a restricted node.
 *
 * Note that node 0 will not be a restricted node.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
  const graph = Array(n).fill().map(() => []);
  const restrictedSet = new Set(restricted);
  const visited = new Set();

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  explore(0);
  return visited.size;

  function explore(node) {
    if (visited.has(node) || restrictedSet.has(node)) return;
    visited.add(node);
    for (const neighbor of graph[node]) {
      explore(neighbor);
    }
  }
};
