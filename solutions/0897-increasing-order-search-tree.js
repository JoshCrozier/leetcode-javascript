/**
 * 897. Increasing Order Search Tree
 * https://leetcode.com/problems/increasing-order-search-tree/
 * Difficulty: Easy
 *
 * Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost
 * node in the tree is now the root of the tree, and every node has no left child and only one
 * right child.
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  const result = new TreeNode(0);
  let current = result;

  inorderTraversal(root);
  return result.right;

  function inorderTraversal(node) {
    if (!node) return;

    inorderTraversal(node.left);
    current.right = new TreeNode(node.val);
    current = current.right;
    inorderTraversal(node.right);
  }
};
