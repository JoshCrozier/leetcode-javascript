/**
 * 2074. Reverse Nodes in Even Length Groups
 * https://leetcode.com/problems/reverse-nodes-in-even-length-groups/
 * Difficulty: Medium
 *
 * You are given the head of a linked list.
 *
 * The nodes in the linked list are sequentially assigned to non-empty groups whose lengths form
 * the sequence of the natural numbers (1, 2, 3, 4, ...). The length of a group is the number
 * of nodes assigned to it. In other words:
 * - The 1st node is assigned to the first group.
 * - The 2nd and the 3rd nodes are assigned to the second group.
 * - The 4th, 5th, and 6th nodes are assigned to the third group, and so on.
 *
 * Note that the length of the last group may be less than or equal to 1 + the length of the second
 * to last group.
 *
 * Reverse the nodes in each group with an even length, and return the head of the modified linked
 * list.
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
 * @return {ListNode}
 */
var reverseEvenLengthGroups = function(head) {
  let prevGroup = head;
  let groupLength = 2;

  while (prevGroup.next) {
    let count = 0;
    let current = prevGroup.next;
    const groupStart = current;

    while (current && count < groupLength) {
      current = current.next;
      count++;
    }

    if (count % 2 === 0) {
      prevGroup.next = reverseGroup(groupStart, count);
    }

    for (let i = 0; i < count; i++) {
      prevGroup = prevGroup.next;
    }

    groupLength++;
  }

  return head;

  function reverseGroup(start, length) {
    let prev = null;
    let current = start;
    for (let i = 0; i < length; i++) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    start.next = current;
    return prev;
  }
};
