/**
 * 124. Binary Tree Maximum Path Sum
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * Difficulty: Hard
 *
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the
 * sequence has an edge connecting them. A node can only appear in the sequence at most
 * once. Note that the path does not need to pass through the root.
 *
 * The path sum of a path is the sum of the node's values in the path.
 *
 * Given the root of a binary tree, return the maximum path sum of any non-empty path.
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
var maxPathSum = function(root) {
  let result = -Infinity;

  function traverse(node) {
    if (!node) return 0;
    const leftValue = Math.max(traverse(node.left), 0);
    const rightValue = Math.max(traverse(node.right), 0);
    result = Math.max(result, node.val + leftValue + rightValue);
    return node.val + Math.max(leftValue, rightValue);
  }

  traverse(root);

  return result;
};
