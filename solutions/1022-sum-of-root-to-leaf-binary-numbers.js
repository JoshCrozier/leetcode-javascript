/**
 * 1022. Sum of Root To Leaf Binary Numbers
 * https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
 * Difficulty: Easy
 *
 * You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf
 * path represents a binary number starting with the most significant bit.
 *
 * For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary,
 * which is 13.
 *
 * For all leaves in the tree, consider the numbers represented by the path from the root to that
 * leaf. Return the sum of these numbers.
 *
 * The test cases are generated so that the answer fits in a 32-bits integer.
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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  return dfs(root);
};

function dfs(node, str = '') {
  if (!node) return 0;
  str += node.val;
  if (!node.left && !node.right) {
    return parseInt(str, 2)
  }
  return dfs(node.left, str) + dfs(node.right, str);
}
