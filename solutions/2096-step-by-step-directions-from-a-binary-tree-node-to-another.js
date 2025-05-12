/**
 * 2096. Step-By-Step Directions From a Binary Tree Node to Another
 * https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/
 * Difficulty: Medium
 *
 * You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value
 * from 1 to n. You are also given an integer startValue representing the value of the start node
 * s, and a different integer destValue representing the value of the destination node t.
 *
 * Find the shortest path starting from node s and ending at node t. Generate step-by-step
 * directions of such path as a string consisting of only the uppercase letters 'L', 'R', and
 * 'U'. Each letter indicates a specific direction:
 * - 'L' means to go from a node to its left child node.
 * - 'R' means to go from a node to its right child node.
 * - 'U' means to go from a node to its parent node.
 *
 * Return the step-by-step directions of the shortest path from node s to node t.
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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
  const startPath = [];
  const destPath = [];

  findPath(root, startValue, startPath);
  findPath(root, destValue, destPath);

  let i = 0;
  while (i < startPath.length && i < destPath.length && startPath[i] === destPath[i]) {
    i++;
  }

  const upMoves = 'U'.repeat(startPath.length - i);
  const downMoves = destPath.slice(i).join('');

  return upMoves + downMoves;

  function findPath(node, value, path) {
    if (!node) return false;
    if (node.val === value) return true;

    path.push('L');
    if (findPath(node.left, value, path)) return true;
    path.pop();

    path.push('R');
    if (findPath(node.right, value, path)) return true;
    path.pop();

    return false;
  }
};
