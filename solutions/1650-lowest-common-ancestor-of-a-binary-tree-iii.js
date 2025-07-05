/**
 * 1650. Lowest Common Ancestor of a Binary Tree III
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
 * Difficulty: Medium
 *
 * Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).
 *
 * Each node will have a reference to its parent node. The definition for Node is below:
 * class Node {
 *     public int val;
 *     public Node left;
 *     public Node right;
 *     public Node parent;
 * }
 *
 * According to the definition of LCA on Wikipedia: "The lowest common ancestor of two
 * nodes p and q in a tree T is the lowest node that has both p and q as descendants
 * (where we allow a node to be a descendant of itself)."
 */

/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
  const set = new Set();

  let current = p;
  while (current) {
    set.add(current);
    current = current.parent;
  }

  current = q;
  while (current) {
    if (set.has(current)) {
      return current;
    }
    current = current.parent;
  }

  return null;
};
