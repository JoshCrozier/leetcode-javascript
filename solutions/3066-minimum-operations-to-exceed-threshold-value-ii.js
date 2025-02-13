/**
 * 3066. Minimum Operations to Exceed Threshold Value II
 * https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums, and an integer k.
 *
 * You are allowed to perform some operations on nums, where in a single operation, you can:
 * - Select the two smallest integers x and y from nums.
 * - Remove x and y from nums.
 * - Insert (min(x, y) * 2 + max(x, y)) at any position in the array.
 *
 * Note that you can only apply the described operation if nums contains at least two elements.
 *
 * Return the minimum number of operations needed so that all elements of the array are greater
 * than or equal to k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  const queue = new MinPriorityQueue();
  let operations = 0;

  nums.forEach(n => queue.enqueue(n));
  while (queue.size() >= 2 && queue.front().element < k) {
    queue.enqueue(queue.dequeue().element * 2 + queue.dequeue().element);
    operations++;
  }

  return operations;
};
