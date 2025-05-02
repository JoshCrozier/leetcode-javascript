/**
 * 1862. Sum of Floored Pairs
 * https://leetcode.com/problems/sum-of-floored-pairs/
 * Difficulty: Hard
 *
 * Given an integer array nums, return the sum of floor(nums[i] / nums[j]) for all pairs of
 * indices 0 <= i, j < nums.length in the array. Since the answer may be too large, return
 * it modulo 109 + 7.
 *
 * The floor() function returns the integer part of the division.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfFlooredPairs = function(nums) {
  const modulo = 1e9 + 7;
  const maxValue = Math.max(...nums);
  const frequency = new Array(maxValue + 1).fill(0);
  const prefixSum = new Array(maxValue + 1).fill(0);
  let result = 0;

  for (const num of nums) {
    frequency[num]++;
  }

  for (let i = 1; i <= maxValue; i++) {
    prefixSum[i] = prefixSum[i - 1] + frequency[i];
  }

  for (let i = 1; i <= maxValue; i++) {
    if (frequency[i] === 0) continue;
    for (let divisor = i; divisor <= maxValue; divisor += i) {
      const quotient = Math.floor(divisor / i);
      const count = (
        prefixSum[Math.min(maxValue, divisor + i - 1)] - prefixSum[divisor - 1]
      ) % modulo;
      result = (result + quotient * frequency[i] * count) % modulo;
    }
  }

  return result;
};
