/**
 * 261. Graph Valid Tree
 * https://leetcode.com/problems/graph-valid-tree/
 * Difficulty: Medium
 *
 * You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of
 * edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai
 * and bi in the graph.
 *
 * Return true if the edges of the given graph make up a valid tree, and false otherwise.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  const parent = new Array(n).fill(-1);

  for (const [u, v] of edges) {
    if (!union(u, v)) return false;
  }

  let components = 0;
  for (let i = 0; i < n; i++) {
    if (parent[i] === -1) components++;
    if (components > 1) return false;
  }

  return edges.length === n - 1;

  function find(x) {
    if (parent[x] === -1) return x;
    return parent[x] = find(parent[x]);
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) return false;
    parent[rootX] = rootY;
    return true;
  }
};
