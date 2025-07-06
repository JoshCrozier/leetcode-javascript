/**
 * 2031. Count Subarrays With More Ones Than Zeros
 * https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/
 * Difficulty: Medium
 *
 * You are given a binary array nums containing only the integers 0 and 1. Return the number
 * of subarrays in nums that have more 1's than 0's. Since the answer may be very large,
 * return it modulo 109 + 7.
 *
 * A subarray is a contiguous sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraysWithMoreZerosThanOnes = function(nums) {
  const MOD = 1e9 + 7;
  const dp = [0, 0];
  const mp = new Map();
  let sum = 0;
  let answer = 0;

  mp.set(0, 1);

  for (const num of nums) {
    const dpPrev = [...dp];

    if (num === 1) {
      sum++;
    } else {
      sum--;
    }

    dp[0] = mp.get(sum) || 0;

    if (num === 1) {
      dp[1] = (dpPrev[0] + dpPrev[1] + 1) % MOD;
    } else {
      dp[1] = (dpPrev[1] - dp[0] + MOD) % MOD;
    }

    mp.set(sum, (mp.get(sum) || 0) + 1);
    answer = (answer + dp[1]) % MOD;
  }

  return answer;
};
