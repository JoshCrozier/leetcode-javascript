/**
 * 250. Count Univalue Subtrees
 * https://leetcode.com/problems/count-univalue-subtrees/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the number of uni-value subtrees.
 *
 * A uni-value subtree means all nodes of the subtree have the same value.
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
var countUnivalSubtrees = function(root) {
  let count = 0;
  traverse(root);
  return count;

  function isUnival(node, value) {
    if (!node) return true;

    if (node.val !== value) return false;

    return isUnival(node.left, value) && isUnival(node.right, value);
  }

  function traverse(node) {
    if (!node) return;

    if (isUnival(node, node.val)) count++;

    traverse(node.left);
    traverse(node.right);
  }
};
