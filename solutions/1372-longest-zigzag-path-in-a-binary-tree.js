/**
 * 1372. Longest ZigZag Path in a Binary Tree
 * https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
 * Difficulty: Medium
 *
 * You are given the root of a binary tree.
 *
 * A ZigZag path for a binary tree is defined as follow:
 * - Choose any node in the binary tree and a direction (right or left).
 * - If the current direction is right, move to the right child of the current node;
 *   otherwise, move to the left child.
 * - Change the direction from right to left or from left to right.
 * - Repeat the second and third steps until you can't move in the tree.
 *
 * Zigzag length is defined as the number of nodes visited - 1. (A single node has a
 * length of 0).
 *
 * Return the longest ZigZag path contained in that tree.
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
var longestZigZag = function(root) {
  let result = 0;

  dfs(root, true, 0);
  dfs(root, false, 0);

  return result;

  function dfs(node, isLeft, total) {
    if (!node) return;
    result = Math.max(result, total);
    dfs(node.left, true, isLeft ? 1 : total + 1);
    dfs(node.right, false, isLeft ? total + 1 : 1);
  }
};
