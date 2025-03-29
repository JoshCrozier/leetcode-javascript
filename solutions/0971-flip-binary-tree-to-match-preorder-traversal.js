/**
 * 971. Flip Binary Tree To Match Preorder Traversal
 * https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/
 * Difficulty: Medium
 *
 * You are given the root of a binary tree with n nodes, where each node is uniquely assigned a
 * value from 1 to n. You are also given a sequence of n values voyage, which is the desired
 * pre-order traversal of the binary tree.
 *
 * Any node in the binary tree can be flipped by swapping its left and right subtrees. For
 * example, flipping node 1 will have the following effect.
 *
 * Flip the smallest number of nodes so that the pre-order traversal of the tree matches voyage.
 *
 * Return a list of the values of all flipped nodes. You may return the answer in any order.
 * If it is impossible to flip the nodes in the tree to make the pre-order traversal match
 * voyage, return the list [-1].
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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
  const flips = [];
  let index = 0;
  return traverse(root) ? flips : [-1];

  function traverse(node) {
    if (!node) return true;
    if (node.val !== voyage[index++]) return false;

    if (!node.left) return traverse(node.right);
    if (node.left.val === voyage[index]) return traverse(node.left) && traverse(node.right);

    flips.push(node.val);
    [node.left, node.right] = [node.right, node.left];
    return traverse(node.left) && traverse(node.right);
  }
};
