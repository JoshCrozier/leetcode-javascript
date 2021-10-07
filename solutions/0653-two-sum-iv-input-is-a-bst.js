/**
 * 653. Two Sum IV - Input is a BST
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 * Difficulty: Easy
 *
 * Given the root of a Binary Search Tree and a target number k, return true
 * if there exist two elements in the BST such that their sum is equal to the
 * given target.
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const set = new Set();
  return dfs(set, root, k);
};

function dfs(set, node, k) {
  if (!node) return false;
  if (set.has(k - node.val)) return true;

  set.add(node.val);

  return dfs(set, node.left, k) || dfs(set, node.right, k);
}
