/**
 * 1469. Find All The Lonely Nodes
 * https://leetcode.com/problems/find-all-the-lonely-nodes/
 * Difficulty: Easy
 *
 * In a binary tree, a lonely node is a node that is the only child of its parent node.
 * The root of the tree is not lonely because it does not have a parent node.
 *
 * Given the root of a binary tree, return an array containing the values of all lonely
 * nodes in the tree. Return the list in any order.
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
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
  const result = [];
  dfs(root);
  return result;

  function dfs(node) {
    if (!node) return;

    if (node.left && !node.right) {
      result.push(node.left.val);
    }

    if (!node.left && node.right) {
      result.push(node.right.val);
    }

    dfs(node.left);
    dfs(node.right);
  }
};
