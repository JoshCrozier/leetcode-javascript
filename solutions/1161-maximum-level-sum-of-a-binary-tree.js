/**
 * 1161. Maximum Level Sum of a Binary Tree
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, the level of its root is 1, the level of its
 * children is 2, and so on.
 *
 * Return the smallest level x such that the sum of all the values of nodes at
 * level x is maximal.
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
var maxLevelSum = function(root) {
  const sums = [-Infinity];

  traverse(root, 1);

  return sums.indexOf(Math.max(...sums));

  function traverse(node, depth) {
    if (!node) return;
    if (sums[depth] === undefined) {
      sums.push(node.val);
    } else {
      sums[depth] += node.val;
    }
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }
};
