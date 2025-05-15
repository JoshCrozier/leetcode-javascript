/**
 * 2196. Create Binary Tree From Descriptions
 * https://leetcode.com/problems/create-binary-tree-from-descriptions/
 * Difficulty: Medium
 *
 * You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti]
 * indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,
 * - If isLefti == 1, then childi is the left child of parenti.
 * - If isLefti == 0, then childi is the right child of parenti.
 *
 * Construct the binary tree described by descriptions and return its root.
 *
 * The test cases will be generated such that the binary tree is valid.
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
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
  const nodes = new Map();
  const children = new Set();

  for (const [parent, child, isLeft] of descriptions) {
    if (!nodes.has(parent)) {
      nodes.set(parent, new TreeNode(parent));
    }
    if (!nodes.has(child)) {
      nodes.set(child, new TreeNode(child));
    }
    children.add(child);
    if (isLeft) {
      nodes.get(parent).left = nodes.get(child);
    } else {
      nodes.get(parent).right = nodes.get(child);
    }
  }

  for (const [val, node] of nodes) {
    if (!children.has(val)) {
      return node;
    }
  }

  return null;
};
