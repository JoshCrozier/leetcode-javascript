/**
 * 725. Split Linked List in Parts
 * https://leetcode.com/problems/split-linked-list-in-parts/
 * Difficulty: Medium
 *
 * Given the head of a singly linked list and an integer k, split the linked list into k
 * consecutive linked list parts.
 *
 * The length of each part should be as equal as possible: no two parts should have a size
 * differing by more than one. This may lead to some parts being null.
 *
 * The parts should be in the order of occurrence in the input list, and parts occurring
 * earlier should always have a size greater than or equal to parts occurring later.
 *
 * Return an array of the k parts.
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
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
  let count = 0;
  let current = head;

  while (current) {
    count++;
    current = current.next;
  }

  const base = Math.floor(count / k);
  const extra = count % k;
  const result = new Array(k).fill(null);

  current = head;
  for (let i = 0; i < k && current; i++) {
    result[i] = current;
    const partSize = base + (i < extra ? 1 : 0);
    for (let j = 1; j < partSize; j++) {
      current = current.next;
    }
    const next = current.next;
    current.next = null;
    current = next;
  }

  return result;
};
