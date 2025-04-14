/**
 * 1425. Constrained Subsequence Sum
 * https://leetcode.com/problems/constrained-subsequence-sum/
 * Difficulty: Hard
 *
 * Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence
 * of that array such that for every two consecutive integers in the subsequence, nums[i] and
 * nums[j], where i < j, the condition j - i <= k is satisfied.
 *
 * A subsequence of an array is obtained by deleting some number of elements (can be zero) from the
 * array, leaving the remaining elements in their original order.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
  const maxSums = [...nums];
  const deque = [];
  let result = nums[0];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[0] < i - k) {
      deque.shift();
    }

    if (deque.length) {
      maxSums[i] = Math.max(maxSums[i], maxSums[deque[0]] + nums[i]);
    }

    while (deque.length && maxSums[deque[deque.length - 1]] <= maxSums[i]) {
      deque.pop();
    }

    deque.push(i);
    result = Math.max(result, maxSums[i]);
  }

  return result;
};
