/**
 * 310. Minimum Height Trees
 * https://leetcode.com/problems/minimum-height-trees/
 * Difficulty: Medium
 *
 * A tree is an undirected graph in which any two vertices are connected by exactly one
 * path. In other words, any connected graph without simple cycles is a tree.
 *
 * Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where
 * edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes
 * ai and bi in the tree, you can choose any node of the tree as the root. When you select
 * a node x as the root, the result tree has height h. Among all possible rooted trees,
 * those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).
 *
 * Return a list of all MHTs' root labels. You can return the answer in any order.
 *
 * The height of a rooted tree is the number of edges on the longest downward path
 * between the root and a leaf.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n === 1) return [0];

  const lookup = new Array(n).fill().map(() => new Set());
  for (const [a, b] of edges) {
    lookup[a].add(b);
    lookup[b].add(a);
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    if (lookup[i].size === 1) result.push(i);
  }

  while (n > 2) {
    n -= result.length;
    const modified = [];
    for (const item of result) {
      const adj = lookup[item].values().next().value;
      lookup[adj].delete(item);
      if (lookup[adj].size === 1) {
        modified.push(adj);
      }
    }
    result = modified;
  }

  return result;
};
