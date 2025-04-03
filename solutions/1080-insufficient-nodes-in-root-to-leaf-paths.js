/**
 * 1080. Insufficient Nodes in Root to Leaf Paths
 * https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/
 * Difficulty: Medium
 *
 * Given the root of a binary tree and an integer limit, delete all insufficient nodes in the
 * tree simultaneously, and return the root of the resulting binary tree.
 *
 * A node is insufficient if every root to leaf path intersecting this node has a sum strictly
 * less than limit.
 *
 * A leaf is a node with no children.
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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit) {
  return checkPath(root, 0) ? root : null;

  function checkPath(node, sum) {
    if (!node) return false;
    if (!node.left && !node.right) return sum + node.val >= limit;

    const leftValid = checkPath(node.left, sum + node.val);
    const rightValid = checkPath(node.right, sum + node.val);

    if (!leftValid) node.left = null;
    if (!rightValid) node.right = null;

    return leftValid || rightValid;
  }
};
