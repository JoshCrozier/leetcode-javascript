/**
 * 103. Binary Tree Zigzag Level Order Traversal
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
 * (i.e., from left to right, then right to left for the next level and alternate between).
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const result = [];

  function traverse(node, depth) {
    if (node == null) return;
    if (result[depth] == null) result[depth] = [];

    if (depth % 2 === 0) {
      result[depth].push(node.val);
    } else {
      result[depth].unshift(node.val);
    }

    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }

  traverse(root, 0);

  return result;
};
