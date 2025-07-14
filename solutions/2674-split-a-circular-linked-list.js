/**
 * 2674. Split a Circular Linked List
 * https://leetcode.com/problems/split-a-circular-linked-list/
 * Difficulty: Medium
 *
 * Given a circular linked list list of positive integers, your task is to split it into 2 circular
 * linked lists so that the first one contains the first half of the nodes in list (exactly
 * ceil(list.length / 2) nodes) in the same order they appeared in list, and the second one contains
 * the rest of the nodes in list in the same order they appeared in list.
 *
 * Return an array answer of length 2 in which the first element is a circular linked list
 * representing the first half and the second element is a circular linked list representing the
 * second half.
 *
 * A circular linked list is a normal linked list with the only difference being that the last
 * node's next node, is the first node.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list
 * @return {ListNode[]}
 */
var splitCircularLinkedList = function(list) {
  let length = 0;
  let current = list;

  do {
    length++;
    current = current.next;
  } while (current !== list);

  const firstHalfLength = Math.ceil(length / 2);

  let firstHalfEnd = list;
  for (let i = 0; i < firstHalfLength - 1; i++) {
    firstHalfEnd = firstHalfEnd.next;
  }

  const secondHalfStart = firstHalfEnd.next;

  let secondHalfEnd = secondHalfStart;
  for (let i = 0; i < length - firstHalfLength - 1; i++) {
    secondHalfEnd = secondHalfEnd.next;
  }

  firstHalfEnd.next = list;
  secondHalfEnd.next = secondHalfStart;

  return [list, secondHalfStart];
};
