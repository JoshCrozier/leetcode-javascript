/**
 * 404. Sum of Left Leaves
 * https://leetcode.com/problems/sum-of-left-leaves/
 * Difficulty: Easy
 *
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 * A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
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
 * @param {TreeNode} include
 * @return {number}
 */
var sumOfLeftLeaves = function(root, include) {
  if (!root) return 0;
  if (!root.left && !root.right && include) return root.val;
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
};
