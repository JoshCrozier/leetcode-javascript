/**
 * 1506. Find Root of N-Ary Tree
 * https://leetcode.com/problems/find-root-of-n-ary-tree/
 * Difficulty: Medium
 *
 * You are given all the nodes of an N-ary tree as an array of Node objects, where each
 * node has a unique value.
 *
 * Return the root of the N-ary tree.
 *
 * Custom testing:
 * - An N-ary tree can be serialized as represented in its level order traversal where each
 *   group of children is separated by the null value (see examples).
 */

/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {_Node[]} tree
 * @return {_Node}
 */
var findRoot = function(tree) {
  const set = new Set();

  for (const node of tree) {
    for (const child of node.children) {
      set.add(child.val);
    }
  }

  for (const node of tree) {
    if (!set.has(node.val)) {
      return node;
    }
  }
};
