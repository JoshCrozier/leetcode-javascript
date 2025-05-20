/**
 * 2331. Evaluate Boolean Binary Tree
 * https://leetcode.com/problems/evaluate-boolean-binary-tree/
 * Difficulty: Easy
 *
 * You are given the root of a full binary tree with the following properties:
 * - Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
 * - Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents
 *   the boolean AND.
 *
 * The evaluation of a node is as follows:
 * - If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
 * - Otherwise, evaluate the node's two children and apply the boolean operation of its value with
 *   the children's evaluations.
 *
 * Return the boolean result of evaluating the root node.
 *
 * A full binary tree is a binary tree where each node has either 0 or 2 children.
 *
 * A leaf node is a node that has zero children.
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
 * @return {boolean}
 */
var evaluateTree = function(root) {
  if (!root.left && !root.right) return root.val === 1;

  const leftResult = evaluateTree(root.left);
  const rightResult = evaluateTree(root.right);

  return root.val === 2 ? leftResult || rightResult : leftResult && rightResult;
};
