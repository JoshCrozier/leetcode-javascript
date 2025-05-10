/**
 * 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
 * https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/
 * Difficulty: Medium
 *
 * A critical point in a linked list is defined as either a local maxima or a local minima.
 *
 * A node is a local maxima if the current node has a value strictly greater than the previous node
 * and the next node.
 *
 * A node is a local minima if the current node has a value strictly smaller than the previous node
 * and the next node.
 *
 * Note that a node can only be a local maxima/minima if there exists both a previous node and a
 * next node.
 *
 * Given a linked list head, return an array of length 2 containing [minDistance, maxDistance]
 * where minDistance is the minimum distance between any two distinct critical points and
 * maxDistance is the maximum distance between any two distinct critical points. If there are
 * fewer than two critical points, return [-1, -1].
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
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
  const criticalPositions = [];
  let position = 1;
  let prev = head;
  let current = head.next;

  while (current.next) {
    const next = current.next;
    if ((current.val > prev.val && current.val > next.val) ||
        (current.val < prev.val && current.val < next.val)) {
      criticalPositions.push(position);
    }
    prev = current;
    current = next;
    position++;
  }

  if (criticalPositions.length < 2) {
    return [-1, -1];
  }

  let minDistance = Infinity;
  for (let i = 1; i < criticalPositions.length; i++) {
    minDistance = Math.min(minDistance, criticalPositions[i] - criticalPositions[i - 1]);
  }

  const maxDistance = criticalPositions[criticalPositions.length - 1] - criticalPositions[0];

  return [minDistance, maxDistance];
};
