/**
 * 113. Path Sum II
 * https://leetcode.com/problems/path-sum-ii/
 * Difficulty: Medium
 *
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where
 * the sum of the node values in the path equals targetSum. Each path should be returned as a
 * list of the node values, not node references.
 *
 * A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a
 * node with no children.
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if (!root) return [];
  return traverse([], targetSum, root);
};

function traverse(result, targetSum, node, history = []) {
  const values = [...history, node.val];

  if (!node.left && !node.right && values.reduce((sum, n) => sum + n, 0) === targetSum) {
    result.push(values);
  }

  if (node.left) traverse(result, targetSum, node.left, values);
  if (node.right) traverse(result, targetSum, node.right, values);

  return result;
}
