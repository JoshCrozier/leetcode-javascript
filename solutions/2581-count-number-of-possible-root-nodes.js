/**
 * 2581. Count Number of Possible Root Nodes
 * https://leetcode.com/problems/count-number-of-possible-root-nodes/
 * Difficulty: Hard
 *
 * Alice has an undirected tree with n nodes labeled from 0 to n - 1. The tree is represented as a
 * 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge
 * between nodes ai and bi in the tree.
 *
 * Alice wants Bob to find the root of the tree. She allows Bob to make several guesses about her
 * tree. In one guess, he does the following:
 * - Chooses two distinct integers u and v such that there exists an edge [u, v] in the tree.
 * - He tells Alice that u is the parent of v in the tree.
 *
 * Bob's guesses are represented by a 2D integer array guesses where guesses[j] = [uj, vj] indicates
 * Bob guessed uj to be the parent of vj.
 *
 * Alice being lazy, does not reply to each of Bob's guesses, but just says that at least k of his
 * guesses are true.
 *
 * Given the 2D integer arrays edges, guesses and the integer k, return the number of possible
 * nodes that can be the root of Alice's tree. If there is no such tree, return 0.
 */

/**
 * @param {number[][]} edges
 * @param {number[][]} guesses
 * @param {number} k
 * @return {number}
 */
var rootCount = function(edges, guesses, k) {
  const n = edges.length + 1;
  const adj = Array.from({ length: n }, () => new Set());
  const set = new Set();

  for (const [u, v] of edges) {
    adj[u].add(v);
    adj[v].add(u);
  }

  for (const [u, v] of guesses) {
    set.add(u * n + v);
  }

  const rootCorrect = dfs(0, -1);
  let result = rootCorrect >= k ? 1 : 0;

  for (const neighbor of adj[0]) {
    helper(neighbor, 0, rootCorrect);
  }

  return result;

  function helper(node, parent, parentCorrect) {
    let count = parentCorrect;
    if (set.has(parent * n + node)) count--;
    if (set.has(node * n + parent)) count++;

    if (count >= k) result++;

    for (const neighbor of adj[node]) {
      if (neighbor !== parent) {
        helper(neighbor, node, count);
      }
    }
  }

  function dfs(node, parent) {
    let count = 0;
    for (const neighbor of adj[node]) {
      if (neighbor !== parent) {
        if (set.has(node * n + neighbor)) count++;
        count += dfs(neighbor, node);
      }
    }
    return count;
  }
};
