/**
 * 687. Longest Univalue Path
 * https://leetcode.com/problems/longest-univalue-path/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the length of the longest path, where each node
 * in the path has the same value. This path may or may not pass through the root.
 *
 * The length of the path between two nodes is represented by the number of edges between them.
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
var longestUnivaluePath = function(root) {
  let max = 0;
  dfs(root);
  return max;

  function dfs(node) {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);
    const leftPath = node.left?.val === node.val ? left + 1 : 0;
    const rightPath = node.right?.val === node.val ? right + 1 : 0;

    max = Math.max(max, leftPath + rightPath);
    return Math.max(leftPath, rightPath);
  }
};
