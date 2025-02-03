/**
 * 654. Maximum Binary Tree
 * https://leetcode.com/problems/maximum-binary-tree/
 * Difficulty: Medium
 *
 * You are given an integer array nums with no duplicates. A maximum binary tree can be built
 * recursively from nums using the following algorithm:
 * 1. Create a root node whose value is the maximum value in nums.
 * 2. Recursively build the left subtree on the subarray prefix to the left of the maximum value.
 * 3. Recursively build the right subtree on the subarray suffix to the right of the maximum value.
 *
 * Return the maximum binary tree built from nums.
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) return null;

  const max = Math.max(...nums);
  const index = nums.indexOf(max);
  const head = new TreeNode(max);

  head.left = constructMaximumBinaryTree(nums.slice(0, index));
  head.right = constructMaximumBinaryTree(nums.slice(index + 1));

  return head;
};
