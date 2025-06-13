/**
 * 298. Binary Tree Longest Consecutive Sequence
 * https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the length of the longest consecutive sequence path.
 *
 * A consecutive sequence path is a path where the values increase by one along the path.
 *
 * Note that the path can start at any node in the tree, and you cannot go from a node to its
 * parent in the path.
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
var longestConsecutive = function(root) {
  let result = 0;
  traverse(root, root.val - 1, 0);
  return result;

  function traverse(node, parentValue, length) {
    if (!node) return;

    const currentLength = parentValue + 1 === node.val ? length + 1 : 1;
    result = Math.max(result, currentLength);

    traverse(node.left, node.val, currentLength);
    traverse(node.right, node.val, currentLength);
  }
};
