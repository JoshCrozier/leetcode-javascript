/**
 * 968. Binary Tree Cameras
 * https://leetcode.com/problems/binary-tree-cameras/
 * Difficulty: Hard
 *
 * You are given the root of a binary tree. We install cameras on the tree nodes where each camera
 * at a node can monitor its parent, itself, and its immediate children.
 *
 * Return the minimum number of cameras needed to monitor all nodes of the tree.
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
var minCameraCover = function(root) {
  let cameras = 0;
  const rootState = traverse(root);
  return rootState === 0 ? cameras + 1 : cameras;

  function traverse(node) {
    if (!node) return 1;

    const left = traverse(node.left);
    const right = traverse(node.right);

    if (left === 0 || right === 0) {
      cameras++;
      return 2;
    }

    if (left === 2 || right === 2) {
      return 1;
    }

    return 0;
  }
};
