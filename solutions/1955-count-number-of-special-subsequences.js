/**
 * 1955. Count Number of Special Subsequences
 * https://leetcode.com/problems/count-number-of-special-subsequences/
 * Difficulty: Hard
 *
 * A sequence is special if it consists of a positive number of 0s, followed by a positive number
 * of 1s, then a positive number of 2s.
 * - For example, [0,1,2] and [0,0,1,1,1,2] are special.
 * - In contrast, [2,1,0], [1], and [0,1,2,0] are not special.
 *
 * Given an array nums (consisting of only integers 0, 1, and 2), return the number of different
 * subsequences that are special. Since the answer may be very large, return it modulo 109 + 7.
 *
 * A subsequence of an array is a sequence that can be derived from the array by deleting some
 * or no elements without changing the order of the remaining elements. Two subsequences are
 * different if the set of indices chosen are different.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialSubsequences = function(nums) {
  const MOD = 1e9 + 7;
  const dp = [1, 0, 0, 0];

  for (const num of nums) {
    dp[num + 1] = (dp[num + 1] * 2 % MOD + dp[num]) % MOD;
  }

  return dp[3];
};
