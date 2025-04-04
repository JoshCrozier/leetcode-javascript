/**
 * 1104. Path In Zigzag Labelled Binary Tree
 * https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/
 * Difficulty: Medium
 *
 * In an infinite binary tree where every node has two children, the nodes are labelled
 * in row order.
 *
 * In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right,
 * while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.
 *
 * Given the label of a node in this tree, return the labels in the path from the root of the
 * tree to the node with that label.
 */

/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
  const result = [];
  let current = label;

  while (current >= 1) {
    result.unshift(current);
    const level = Math.floor(Math.log2(current));
    current = Math.floor(((2 ** (level + 1)) - 1 + (2 ** level) - current) / 2);
  }

  return result;
};
