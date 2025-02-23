/**
 * 889. Construct Binary Tree from Preorder and Postorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 * Difficulty: Medium
 *
 * Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a
 * binary tree of distinct values and postorder is the postorder traversal of the same tree,
 * reconstruct and return the binary tree.
 *
 * If there exist multiple answers, you can return any of them.
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  if (!preorder.length) return null;

  const root = new TreeNode(preorder[0]);
  if (preorder.length === 1) return root;

  const leftSize = postorder.indexOf(preorder[1]) + 1;
  root.left = constructFromPrePost(
    preorder.slice(1, leftSize + 1),
    postorder.slice(0, leftSize)
  );
  root.right = constructFromPrePost(
    preorder.slice(leftSize + 1),
    postorder.slice(leftSize, -1)
  );

  return root;
};
