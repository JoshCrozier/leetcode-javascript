/**
 * 563. Binary Tree Tilt
 * https://leetcode.com/problems/binary-tree-tilt/
 * Difficulty: Easy
 *
 * Given the root of a binary tree, return the sum of every tree node's tilt.
 *
 * The tilt of a tree node is the absolute difference between the sum of all
 * left subtree node values and all right subtree node values. If a node does
 * not have a left child, then the sum of the left subtree node values is
 * treated as 0. The rule is similar if the node does not have a right child.
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
var findTilt = function(root) {
  const result = { val: 0 };
  dfs(root, result);
  return result.val;
};

function dfs(root, tilt) {
  if (!root) return 0;
  const left = dfs(root.left, tilt);
  const right = dfs(root.right, tilt);
  tilt.val += Math.abs(left - right);
  return root.val + left + right;
}
