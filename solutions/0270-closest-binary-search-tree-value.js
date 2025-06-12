/**
 * 270. Closest Binary Search Tree Value
 * https://leetcode.com/problems/closest-binary-search-tree-value/
 * Difficulty: Easy
 *
 * Given the root of a binary search tree and a target value, return the value in the BST that
 * is closest to the target. If there are multiple answers, print the smallest.
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
 * @return {number}
 */
var closestValue = function(root, target) {
  let closest = root.val;

  while (root) {
    closest = Math.abs(root.val - target) < Math.abs(closest - target)
      || (Math.abs(root.val - target) === Math.abs(closest - target) && root.val < closest)
      ? root.val
      : closest;

    root = target < root.val ? root.left : root.right;
  }

  return closest;
};
