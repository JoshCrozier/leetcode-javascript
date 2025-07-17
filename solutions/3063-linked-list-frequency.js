/**
 * 3063. Linked List Frequency
 * https://leetcode.com/problems/linked-list-frequency/
 * Difficulty: Easy
 *
 * Given the head of a linked list containing k distinct elements, return the head to a linked
 * list of length k containing the frequency of each distinct element in the given linked list
 * in any order.
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
var frequenciesOfElements = function(head) {
  const map = new Map();
  let currentNode = head;

  while (currentNode) {
    map.set(currentNode.val, (map.get(currentNode.val) || 0) + 1);
    currentNode = currentNode.next;
  }

  const frequencies = Array.from(map.values());

  if (frequencies.length === 0) return null;

  const resultHead = new ListNode(frequencies[0]);
  let resultCurrent = resultHead;

  for (let i = 1; i < frequencies.length; i++) {
    resultCurrent.next = new ListNode(frequencies[i]);
    resultCurrent = resultCurrent.next;
  }

  return resultHead;
};
