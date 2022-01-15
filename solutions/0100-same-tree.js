/**
 * 100. Same Tree
 * https://leetcode.com/problems/same-tree/
 * Difficulty: Easy
 *
 * Given the roots of two binary trees p and q, write a function to check if they are
 * the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and
 * the nodes have the same value.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const hasSameValue = p !== null && q !== null && p.val === q.val;
  const hasSameTree = hasSameValue && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  return (p === null && q === null) || hasSameTree;
};
