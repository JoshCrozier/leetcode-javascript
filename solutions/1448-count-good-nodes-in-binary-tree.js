/**
 * 1448. Count Good Nodes in Binary Tree
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 * Difficulty: Medium
 *
 * Given a binary tree root, a node X in the tree is named good if in the path from
 * root to X there are no nodes with a value greater than X.
 *
 * Return the number of good nodes in the binary tree.
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
var goodNodes = function(root, max = -Infinity) {
  if (!root) return 0;
  const n = root.val >= max ? 1 : 0;
  return n + goodNodes(root.left, n ? root.val : max) + goodNodes(root.right, n ? root.val : max);
};
