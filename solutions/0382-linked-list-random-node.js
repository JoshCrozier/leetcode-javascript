/**
 * 382. Linked List Random Node
 * https://leetcode.com/problems/linked-list-random-node/
 * Difficulty: Medium
 *
 * Given a singly linked list, return a random node's value from the linked list. Each node must
 * have the same probability of being chosen.
 *
 * Implement the Solution class:
 * - Solution(ListNode head) Initializes the object with the head of the singly-linked list head.
 * - int getRandom() Chooses a node randomly from the list and returns its value. All the nodes
 *   of the list should be equally likely to be chosen.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let current = this.head;
  let result = current.val;
  let count = 1;

  while (current.next) {
    current = current.next;
    count++;
    if (Math.random() < 1 / count) {
      result = current.val;
    }
  }

  return result;
};
