/**
 * 1962. Remove Stones to Minimize the Total
 * https://leetcode.com/problems/remove-stones-to-minimize-the-total/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array piles, where piles[i] represents the number
 * of stones in the ith pile, and an integer k. You should apply the following operation
 * exactly k times:
 * - Choose any piles[i] and remove ceil(piles[i] / 2) stones from it.
 *
 * Notice that you can apply the operation on the same pile more than once.
 *
 * Return the minimum possible total number of stones remaining after applying the k operations.
 *
 * ceil(x) is the smallest integer that is greater than or equal to x (i.e., rounds x up).
 */

/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
  const maxHeap = new PriorityQueue((a, b) => b - a);
  let result = 0;

  for (const pile of piles) {
    maxHeap.enqueue(pile);
    result += pile;
  }

  while (k-- > 0) {
    const largest = maxHeap.dequeue();
    maxHeap.enqueue(largest - Math.floor(largest / 2));
    result -= Math.floor(largest / 2);
  }

  return result;
};
