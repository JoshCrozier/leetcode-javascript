/**
 * 742. Closest Leaf in a Binary Tree
 * https://leetcode.com/problems/closest-leaf-in-a-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree where every node has a unique value and a target integer k,
 * return the value of the nearest leaf node to the target k in the tree.
 *
 * Nearest to a leaf means the least number of edges traveled on the binary tree to reach any
 * leaf of the tree. Also, a node is called a leaf if it has no children.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var findClosestLeaf = function(root, k) {
  const graph = new Map();
  const leaves = new Set();

  buildGraph(root, null);

  const queue = [k];
  const visited = new Set([k]);

  while (queue.length) {
    const current = queue.shift();
    if (leaves.has(current)) return current;

    for (const neighbor of graph.get(current) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return -1;

  function buildGraph(node, parent) {
    if (!node) return;
    if (!node.left && !node.right) leaves.add(node.val);
    if (parent) {
      if (!graph.has(node.val)) graph.set(node.val, new Set());
      if (!graph.has(parent.val)) graph.set(parent.val, new Set());
      graph.get(node.val).add(parent.val);
      graph.get(parent.val).add(node.val);
    }
    buildGraph(node.left, node);
    buildGraph(node.right, node);
  }
};
