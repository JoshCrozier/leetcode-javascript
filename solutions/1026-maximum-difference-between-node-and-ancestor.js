/**
 * 1026. Maximum Difference Between Node and Ancestor
 * https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, find the maximum value v for which there exist different nodes
 * a and b where v = |a.val - b.val| and a is an ancestor of b.
 *
 * A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an
 * ancestor of b.
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
var maxAncestorDiff = function(root) {
  return traverse(root, root.val, root.val);

  function traverse(node, maxVal, minVal) {
    if (!node) return maxVal - minVal;

    maxVal = Math.max(maxVal, node.val);
    minVal = Math.min(minVal, node.val);

    return Math.max(
      traverse(node.left, maxVal, minVal),
      traverse(node.right, maxVal, minVal)
    );
  }
};
