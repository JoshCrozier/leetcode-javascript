/**
 * 2386. Find the K-Sum of an Array
 * https://leetcode.com/problems/find-the-k-sum-of-an-array/
 * Difficulty: Hard
 *
 * You are given an integer array nums and a positive integer k. You can choose any subsequence
 * of the array and sum all of its elements together.
 *
 * We define the K-Sum of the array as the kth largest subsequence sum that can be obtained
 * (not necessarily distinct).
 *
 * Return the K-Sum of the array.
 *
 * A subsequence is an array that can be derived from another array by deleting some or no elements
 * without changing the order of the remaining elements.
 *
 * Note that the empty subsequence is considered to have a sum of 0.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kSum = function(nums, k) {
  const maxSum = nums.reduce((sum, num) => sum + Math.max(0, num), 0);
  const absoluteNums = nums.map(num => Math.abs(num)).sort((a, b) => a - b);
  const maxHeap = new PriorityQueue((a, b) => a[0] - b[0]);
  maxHeap.enqueue([-maxSum + absoluteNums[0], 0]);
  let nextSum = -maxSum;

  for (let iteration = 0; iteration < k - 1; iteration++) {
    [nextSum, i] = maxHeap.dequeue();

    if (i + 1 < absoluteNums.length) {
      maxHeap.enqueue([nextSum - absoluteNums[i] + absoluteNums[i + 1], i + 1]);
      maxHeap.enqueue([nextSum + absoluteNums[i + 1], i + 1]);
    }
  }

  return -nextSum;
};
