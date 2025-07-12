/**
 * 2524. Maximum Frequency Score of a Subarray
 * https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/
 * Difficulty: Hard
 *
 * You are given an integer array nums and a positive integer k.
 *
 * The frequency score of an array is the sum of the distinct values in the array raised to
 * the power of their frequencies, taking the sum modulo 109 + 7.
 * - For example, the frequency score of the array [5,4,5,7,4,4] is (43 + 52 + 71) modulo
 *   (109 + 7) = 96.
 *
 * Return the maximum frequency score of a subarray of size k in nums. You should maximize
 * the value under the modulo and not the actual value.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequencyScore = function(nums, k) {
  const MOD = 1e9 + 7;

  let sum = 0;
  let result = 0;
  const frequency = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!frequency.has(nums[i])) {
      frequency.set(nums[i], []);
    }
    sum = adjustSum(sum, nums[i], frequency.get(nums[i]));

    if (i >= k - 1) {
      if (i >= k) {
        sum = adjustSum(sum, nums[i - k], frequency.get(nums[i - k]), false);
      }
      result = Math.max(result, sum);
    }
  }

  return result;

  function adjustSum(sum, value, powers, add = true) {
    sum = (MOD + sum - (powers.length === 0 ? 0 : powers[powers.length - 1])) % MOD;
    if (add) {
      const newPower = (value * (powers.length === 0 ? 1 : powers[powers.length - 1])) % MOD;
      powers.push(newPower);
    } else {
      powers.pop();
    }
    return (sum + (powers.length === 0 ? 0 : powers[powers.length - 1])) % MOD;
  }
};
