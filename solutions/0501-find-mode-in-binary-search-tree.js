/**
 * 501. Find Mode in Binary Search Tree
 * https://leetcode.com/problems/find-mode-in-binary-search-tree/
 * Difficulty: Easy
 *
 * Given the root of a binary search tree (BST) with duplicates, return all
 * the mode(s) (i.e., the most frequently occurred element) in it.
 *
 * If the tree has more than one mode, return them in any order.
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
var findMode = function(root) {
  const map = new Map();
  dfs(root);

  function dfs(root) {
    if (!root) return 0;
    map.set(root.val, (map.get(root.val) || 0) + 1);
    [root.left, root.right].forEach(dfs);
  }

  const max = Math.max(...map.values());
  return Array.from(map.keys()).filter(key => map.get(key) === max);
};
