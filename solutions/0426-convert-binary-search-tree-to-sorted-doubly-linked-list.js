/**
 * 426. Convert Binary Search Tree to Sorted Doubly Linked List
 * https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
 * Difficulty: Medium
 *
 * Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.
 *
 * You can think of the left and right pointers as synonymous to the predecessor and successor
 * pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the
 * first element is the last element, and the successor of the last element is the first element.
 *
 * We want to do the transformation in place. After the transformation, the left pointer of the
 * tree node should point to its predecessor, and the right pointer should point to its successor.
 * You should return the pointer to the smallest element of the linked list.
 */

/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var treeToDoublyList = function(root) {
  if (!root) return null;

  let first = null;
  let last = null;

  inorder(root);

  last.right = first;
  first.left = last;

  return first;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    if (last) {
      last.right = node;
      node.left = last;
    } else {
      first = node;
    }
    last = node;

    inorder(node.right);
  }
};
