/**
 * 272. Closest Binary Search Tree Value II
 * https://leetcode.com/problems/closest-binary-search-tree-value-ii/
 * Difficulty: Hard
 *
 * Given the root of a binary search tree, a target value, and an integer k, return the k values
 * in the BST that are closest to the target. You may return the answer in any order.
 *
 * You are guaranteed to have only one unique set of k values in the BST that are closest to the
 * target.
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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
  const values = [];

  inOrder(root);

  values.sort((a, b) => Math.abs(a - target) - Math.abs(b - target));
  return values.slice(0, k);

  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    values.push(node.val);
    inOrder(node.right);
  }
};
