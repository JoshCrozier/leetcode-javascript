/**
 * 101. Symmetric Tree
 * https://leetcode.com/problems/symmetric-tree/
 * Difficulty: Easy
 *
 * Given the root of a binary tree, check whether it is a mirror
 * of itself (i.e., symmetric around its center).
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isBalanced(root.left, root.right);
};

function isBalanced(a, b) {
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.val === b.val && isBalanced(a.left, b.right) && isBalanced(a.right, b.left);
}
