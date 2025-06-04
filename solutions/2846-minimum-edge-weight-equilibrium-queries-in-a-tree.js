/**
 * 2846. Minimum Edge Weight Equilibrium Queries in a Tree
 * https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/
 * Difficulty: Hard
 *
 * There is an undirected tree with n nodes labeled from 0 to n - 1. You are given the integer n and
 * a 2D integer array edges of length n - 1, where edges[i] = [ui, vi, wi] indicates that there is
 * an edge between nodes ui and vi with weight wi in the tree.
 *
 * You are also given a 2D integer array queries of length m, where queries[i] = [ai, bi]. For each
 * query, find the minimum number of operations required to make the weight of every edge on the
 * path from ai to bi equal. In one operation, you can choose any edge of the tree and change its
 * weight to any value.
 *
 * Note that:
 * - Queries are independent of each other, meaning that the tree returns to its initial state on
 *   each new query.
 * - The path from ai to bi is a sequence of distinct nodes starting with node ai and ending with
 *   node bi such that every two adjacent nodes in the sequence share an edge in the tree.
 *
 * Return an array answer of length m where answer[i] is the answer to the ith query.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var minOperationsQueries = function(n, edges, queries) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const parent = new Array(n).fill(-1);
  const weightCount = new Array(n).fill().map(() => new Array(27).fill(0));
  const depth = new Array(n).fill(0);

  dfs(0, -1, 0);

  const result = [];
  for (const [u, v] of queries) {
    const ancestor = lca(u, v);
    const counts = Array(27).fill(0);
    for (let i = 1; i <= 26; i++) {
      counts[i] = weightCount[u][i] + weightCount[v][i] - 2 * weightCount[ancestor][i];
    }
    const total = depth[u] + depth[v] - 2 * depth[ancestor];
    const maxCount = Math.max(...counts);
    result.push(total - maxCount);
  }

  return result;

  function dfs(node, par, dep) {
    parent[node] = par;
    depth[node] = dep;
    for (const [next, w] of graph[node]) {
      if (next !== par) {
        weightCount[next] = [...weightCount[node]];
        weightCount[next][w]++;
        dfs(next, node, dep + 1);
      }
    }
  }
  function lca(u, v) {
    if (depth[u] < depth[v]) [u, v] = [v, u];
    while (depth[u] > depth[v]) u = parent[u];
    while (u !== v) {
      u = parent[u];
      v = parent[v];
    }
    return u;
  }
};
