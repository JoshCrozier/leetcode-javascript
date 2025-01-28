/**
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * Difficulty: Medium
 *
 * Given two integer arrays inorder and postorder where inorder is the inorder traversal of a
 * binary tree and postorder is the postorder traversal of the same tree, construct and return
 * the binary tree.
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null;

  const root = postorder[postorder.length - 1];
  const index = inorder.indexOf(root);

  return {
    val: root,
    left: buildTree(inorder.slice(0, index), postorder.slice(0, index)),
    right: buildTree(inorder.slice(index + 1), postorder.slice(index, -1))
  };
};
