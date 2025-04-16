/**
 * 1483. Kth Ancestor of a Tree Node
 * https://leetcode.com/problems/kth-ancestor-of-a-tree-node/
 * Difficulty: Hard
 *
 * You are given a tree with n nodes numbered from 0 to n - 1 in the form of a parent array
 * parent where parent[i] is the parent of ith node. The root of the tree is node 0. Find the
 * kth ancestor of a given node.
 *
 * The kth ancestor of a tree node is the kth node in the path from that node to the root node.
 *
 * Implement the TreeAncestor class:
 * - TreeAncestor(int n, int[] parent) Initializes the object with the number of nodes in the tree
 *   and the parent array.
 * - int getKthAncestor(int node, int k) return the kth ancestor of the given node node. If there
 *   is no such ancestor, return -1.
 */

/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function(n, parent) {
  const maxDepth = Math.ceil(Math.log2(n));
  this.ancestors = Array.from({ length: n }, () => new Array(maxDepth + 1).fill(-1));

  for (let i = 0; i < n; i++) {
    this.ancestors[i][0] = parent[i];
  }

  for (let j = 1; j <= maxDepth; j++) {
    for (let i = 0; i < n; i++) {
      if (this.ancestors[i][j - 1] !== -1) {
        this.ancestors[i][j] = this.ancestors[this.ancestors[i][j - 1]][j - 1];
      }
    }
  }
};

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function(node, k) {
  let current = node;
  for (let j = 0; k > 0 && current !== -1; j++, k >>= 1) {
    if (k & 1) {
      current = this.ancestors[current][j];
    }
  }
  return current;
};
