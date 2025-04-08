/**
 * 1302. Deepest Leaves Sum
 * https://leetcode.com/problems/deepest-leaves-sum/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the sum of values of its deepest leaves.
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
var deepestLeavesSum = function(root) {
  let maxDepth = 0;
  let sumAtMaxDepth = 0;

  function traverse(node, depth) {
    if (!node) return;

    if (depth > maxDepth) {
      maxDepth = depth;
      sumAtMaxDepth = node.val;
    } else if (depth === maxDepth) {
      sumAtMaxDepth += node.val;
    }

    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }

  traverse(root, 0);
  return sumAtMaxDepth;
};
