/**
 * 862. Shortest Subarray with Sum at Least K
 * https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/
 * Difficulty: Hard
 *
 * Given an integer array nums and an integer k, return the length of the shortest non-empty
 * subarray of nums with a sum of at least k. If there is no such subarray, return -1.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  const prefixSums = [0];
  for (let i = 0; i < nums.length; i++) {
    prefixSums.push(prefixSums[i] + nums[i]);
  }

  const deque = [];
  let shortestLength = Infinity;

  for (let i = 0; i < prefixSums.length; i++) {
    while (deque.length && prefixSums[i] - prefixSums[deque[0]] >= k) {
      shortestLength = Math.min(shortestLength, i - deque.shift());
    }
    while (deque.length && prefixSums[i] <= prefixSums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
  }

  return shortestLength === Infinity ? -1 : shortestLength;
};
