/**
 * 112. Path Sum
 * https://leetcode.com/problems/path-sum/
 * Difficulty: Easy
 *
 * Given the root of a binary tree and an integer targetSum, return true if the
 * tree has a root-to-leaf path such that adding up all the values along the
 * path equals targetSum.
 *
 * A leaf is a node with no children.
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false;
  }
  const result = [];

  traverse(result, root);

  return result.includes(targetSum);
};

function traverse(result, node, sum = 0) {
  if (!node.left && !node.right) {
    result.push(sum + node.val);
  }

  if (node.left) traverse(result, node.left, sum + node.val);
  if (node.right) traverse(result, node.right, sum + node.val);
}
