/**
 * 1171. Remove Zero Sum Consecutive Nodes from Linked List
 * https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
 * Difficulty: Medium
 *
 * Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to
 * 0 until there are no such sequences.
 *
 * After doing so, return the head of the final linked list.  You may return any such answer.
 *
 * (Note that in the examples below, all sequences are serializations of ListNode objects.)
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
var removeZeroSumSublists = function(head) {
  const node = new ListNode(0, head);
  const map = new Map();
  let prefixSum = 0;

  let current = node;
  while (current) {
    prefixSum += current.val;
    map.set(prefixSum, current);
    current = current.next;
  }

  prefixSum = 0;
  current = node;
  while (current) {
    prefixSum += current.val;
    if (map.has(prefixSum) && map.get(prefixSum) !== current) {
      current.next = map.get(prefixSum).next;
    }
    current = current.next;
  }

  return node.next;
};
