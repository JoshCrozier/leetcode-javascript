/**
 * 156. Binary Tree Upside Down
 * https://leetcode.com/problems/binary-tree-upside-down/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, turn the tree upside down and return the new root.
 *
 * You can turn a binary tree upside down with the following steps:
 * - The original left child becomes the new root.
 * - The original root becomes the new right child.
 * - The original right child becomes the new left child.
 *
 * The mentioned steps are done level by level. It is guaranteed that every right node has
 * a sibling (a left node with the same parent) and has no children.
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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
  if (!root || !root.left) return root;

  const newRoot = upsideDownBinaryTree(root.left);
  root.left.left = root.right;
  root.left.right = root;
  root.left = null;
  root.right = null;

  return newRoot;
};
