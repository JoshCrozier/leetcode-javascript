/**
 * 86. Partition List
 * https://leetcode.com/problems/partition-list/
 * Difficulty: Medium
 *
 * Given the head of a linked list and a value x, partition it such that
 * all nodes less than x come before nodes greater than or equal to x.
 *
 * You should preserve the original relative order of the nodes in each
 * of the two partitions.
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const result = [];
  const stack = [];

  while (head) {
    const target = head.val >= x ? result : stack;
    target.push(head.val);
    head = head.next;
  }

  return [...stack, ...result].reverse().reduce((a, b) => {
    return new ListNode(b, a);
  }, null);
};
