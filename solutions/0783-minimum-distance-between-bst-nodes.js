/**
 * 783. Minimum Distance Between BST Nodes
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 * Difficulty: Easy
 *
 * Given the root of a Binary Search Tree (BST), return the minimum difference between
 * the values of any two different nodes in the tree.
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
var minDiffInBST = function(root) {
  let result = Infinity;
  let previous = null;

  inorder(root);
  return result;

  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    result = previous === null ? result : Math.min(result, node.val - previous);
    previous = node.val;
    inorder(node.right);
  }
};
