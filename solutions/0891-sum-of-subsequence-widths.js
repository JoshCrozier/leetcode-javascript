/**
 * 891. Sum of Subsequence Widths
 * https://leetcode.com/problems/sum-of-subsequence-widths/
 * Difficulty: Hard
 *
 * The width of a sequence is the difference between the maximum and minimum elements
 * in the sequence.
 *
 * Given an array of integers nums, return the sum of the widths of all the non-empty
 * subsequences of nums. Since the answer may be very large, return it modulo 109 + 7.
 *
 * A subsequence is a sequence that can be derived from an array by deleting some or
 * no elements without changing the order of the remaining elements. For example,
 * [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function(nums) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const powers = [1];

  nums.sort((a, b) => a - b);
  for (let i = 1; i < n; i++) {
    powers[i] = (powers[i - 1] * 2) % MOD;
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const contribution = (nums[i] * (powers[i] - powers[n - 1 - i] + MOD)) % MOD;
    result = (result + contribution) % MOD;
  }

  return result;
};
