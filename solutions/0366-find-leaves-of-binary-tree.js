/**
 * 366. Find Leaves of Binary Tree
 * https://leetcode.com/problems/find-leaves-of-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, collect a tree's nodes as if you were doing this:
 * - Collect all the leaf nodes.
 * - Remove all the leaf nodes.
 * - Repeat until the tree is empty.
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
 * @return {number[][]}
 */
var findLeaves = function(root) {
  const levels = [];
  getHeight(root);
  return levels;

  function getHeight(node) {
    if (!node) return -1;

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    const height = Math.max(leftHeight, rightHeight) + 1;

    if (levels.length <= height) {
      levels.push([]);
    }
    levels[height].push(node.val);

    return height;
  }
};
