/**
 * 510. Inorder Successor in BST II
 * https://leetcode.com/problems/inorder-successor-in-bst-ii/
 * Difficulty: Medium
 *
 * Given a node in a binary search tree, return the in-order successor of that node in the BST.
 * If that node has no in-order successor, return null.
 *
 * The successor of a node is the node with the smallest key greater than node.val.
 *
 * You will have direct access to the node but not to the root of the tree. Each node will have
 * a reference to its parent node. Below is the definition for Node:
 *
 * class Node {
 *     public int val;
 *     public Node left;
 *     public Node right;
 *     public Node parent;
 * }
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
 * @param {_Node} node
 * @return {_Node}
 */
var inorderSuccessor = function(node) {
  if (node.right) {
    let successor = node.right;
    while (successor.left) {
      successor = successor.left;
    }
    return successor;
  }

  let current = node;
  while (current.parent && current.parent.right === current) {
    current = current.parent;
  }
  return current.parent;
};
