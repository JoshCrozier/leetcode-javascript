/**
 * 430. Flatten a Multilevel Doubly Linked List
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 * Difficulty: Medium
 *
 * You are given a doubly linked list, which contains nodes that have a next pointer, a previous
 * pointer, and an additional child pointer. This child pointer may or may not point to a separate
 * doubly linked list, also containing these special nodes. These child lists may have one or more
 * children of their own, and so on, to produce a multilevel data structure as shown in the example
 * below.
 *
 * Given the head of the first level of the list, flatten the list so that all the nodes appear in
 * a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child
 * list should appear after curr and before curr.next in the flattened list.
 *
 * Return the head of the flattened list. The nodes in the list must have all of their child
 * pointers set to null.
 */

/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
  if (!head) return null;

  let current = head;
  while (current) {
    if (!current.child) {
      current = current.next;
    } else {
      const { child, next } = current;
      current.child = null;
      current.next = child;
      child.prev = current;

      let tail = child;
      while (tail.next) {
        tail = tail.next;
      }

      tail.next = next;
      if (next) {
        next.prev = tail;
      }
      current = current.next;
    }
  }

  return head;
};
