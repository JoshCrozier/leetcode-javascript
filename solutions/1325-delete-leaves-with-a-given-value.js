/**
 * 1325. Delete Leaves With a Given Value
 * https://leetcode.com/problems/delete-leaves-with-a-given-value/
 * Difficulty: Medium
 *
 * Given a binary tree root and an integer target, delete all the leaf nodes with value target.
 *
 * Note that once you delete a leaf node with value target, if its parent node becomes a leaf
 * node and has the value target, it should also be deleted (you need to continue doing that
 * until you cannot).
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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
  return pruneLeaves(root);

  function pruneLeaves(node) {
    if (!node) return null;

    node.left = pruneLeaves(node.left);
    node.right = pruneLeaves(node.right);

    if (!node.left && !node.right && node.val === target) {
      return null;
    }

    return node;
  }
};
