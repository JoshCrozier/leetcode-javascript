/**
 * 1265. Print Immutable Linked List in Reverse
 * https://leetcode.com/problems/print-immutable-linked-list-in-reverse/
 * Difficulty: Medium
 *
 * You are given an immutable linked list, print out all values of each node in reverse
 * with the help of the following interface:
 * - ImmutableListNode: An interface of immutable linked list, you are given the head of the list.
 *
 * You need to use the following functions to access the linked list (you can't access the
 * ImmutableListNode directly):
 * - ImmutableListNode.printValue(): Print value of the current node.
 * - ImmutableListNode.getNext(): Return the next node.
 *
 * The input is only given to initialize the linked list internally. You must solve this problem
 * without modifying the linked list. In other words, you must operate the linked list using
 * only the mentioned APIs.
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
var printLinkedListInReverse = function(head) {
  if (!head) return;
  printLinkedListInReverse(head.getNext());
  head.printValue();
};
