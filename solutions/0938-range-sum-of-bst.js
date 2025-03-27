/**
 * 938. Range Sum of BST
 * https://leetcode.com/problems/range-sum-of-bst/
 * Difficulty: Easy
 *
 * Given the root node of a binary search tree and two integers low and high, return the sum
 * of values of all nodes with a value in the inclusive range [low, high].
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  return traverse(root);

  function traverse(node) {
    if (!node) return 0;
    const value = node.val;
    if (value < low) return traverse(node.right);
    if (value > high) return traverse(node.left);
    return value + traverse(node.left) + traverse(node.right);
  }
};
