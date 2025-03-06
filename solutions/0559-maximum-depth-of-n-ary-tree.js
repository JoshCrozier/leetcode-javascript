/**
 * 559. Maximum Depth of N-ary Tree
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 * Difficulty: Easy
 *
 * Given a n-ary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the root node down to
 * the farthest leaf node.
 *
 * Nary-Tree input serialization is represented in their level order traversal, each group of
 * children is separated by the null value (See examples).
 */

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  if (!root.children || !root.children.length) return 1;
  return Math.max(...root.children.map(child => maxDepth(child))) + 1;
};
