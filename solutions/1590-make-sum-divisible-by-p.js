/**
 * 1590. Make Sum Divisible by P
 * https://leetcode.com/problems/make-sum-divisible-by-p/
 * Difficulty: Medium
 *
 * Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that
 * the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.
 *
 * Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.
 *
 * A subarray is defined as a contiguous block of elements in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  const remainder = totalSum % p;

  if (remainder === 0) return 0;

  const prefixSums = new Map([[0, -1]]);
  let currentSum = 0;
  let minLength = nums.length;

  for (let i = 0; i < nums.length; i++) {
    currentSum = (currentSum + nums[i]) % p;
    const target = (currentSum - remainder + p) % p;

    if (prefixSums.has(target)) {
      minLength = Math.min(minLength, i - prefixSums.get(target));
    }

    prefixSums.set(currentSum, i);
  }

  return minLength < nums.length ? minLength : -1;
};
