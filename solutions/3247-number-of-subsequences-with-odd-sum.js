/**
 * 3247. Number of Subsequences with Odd Sum
 * https://leetcode.com/problems/number-of-subsequences-with-odd-sum/
 * Difficulty: Medium
 *
 * Given an array nums, return the number of subsequences with an odd sum of elements.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequenceCount = function(nums) {
  const MOD = 1e9 + 7;
  let oddCount = 0;
  let evenCount = 1;

  for (const num of nums) {
    if (num % 2 === 1) {
      const newOddCount = (oddCount + evenCount) % MOD;
      const newEvenCount = (evenCount + oddCount) % MOD;
      oddCount = newOddCount;
      evenCount = newEvenCount;
    } else {
      oddCount = (oddCount * 2) % MOD;
      evenCount = (evenCount * 2) % MOD;
    }
  }

  return oddCount;
};
