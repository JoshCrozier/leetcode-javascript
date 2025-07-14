/**
 * 2773. Height of Special Binary Tree
 * https://leetcode.com/problems/height-of-special-binary-tree/
 * Difficulty: Medium
 *
 * You are given a root, which is the root of a special binary tree with n nodes. The nodes of
 * the special binary tree are numbered from 1 to n. Suppose the tree has k leaves in the
 * following order: b1 < b2 < ... < bk.
 *
 * The leaves of this tree have a special property! That is, for every leaf bi, the following
 * conditions hold:
 * - The right child of bi is bi + 1 if i < k, and b1 otherwise.
 * - The left child of bi is bi - 1 if i > 1, and bk otherwise.
 *
 * Return the height of the given tree.
 *
 * Note: The height of a binary tree is the length of the longest path from the root to any
 * other node.
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
var heightOfTree = function(root) {
  if (!root || (root.left && root.left.right === root)) {
    return 0;
  }

  return 1 + Math.max(heightOfTree(root.left), heightOfTree(root.right));
};
