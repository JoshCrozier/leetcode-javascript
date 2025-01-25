/**
 * 199. Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the
 * values of the nodes you can see ordered from top to bottom.
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
var rightSideView = function(root, result = [], depth = 0) {
  if (!root) return result;
  result[depth] = root.val;
  rightSideView(root.left, result, depth + 1);
  return rightSideView(root.right, result, depth + 1);
};
