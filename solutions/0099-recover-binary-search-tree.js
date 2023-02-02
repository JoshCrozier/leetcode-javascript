/**
 * 99. Recover Binary Search Tree
 * https://leetcode.com/problems/recover-binary-search-tree/
 * Difficulty: Medium
 *
 * You are given the root of a binary search tree (BST), where the values
 * of exactly two nodes of the tree were swapped by mistake. Recover the
 * tree without changing its structure.
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let [previous, small, large] = [null, null, null];

  dfs(root);
  [large.val, small.val] = [small.val, large.val];

  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    if (previous != null && previous.val > root.val) {
      small = root;
      if (!large) {
        large = previous;
      } else {
        return false;
      }
    }
    previous = root;
    dfs(root.right);
  }
};
