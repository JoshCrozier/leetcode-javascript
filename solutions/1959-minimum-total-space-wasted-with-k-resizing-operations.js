/**
 * 1959. Minimum Total Space Wasted With K Resizing Operations
 * https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/
 * Difficulty: Medium
 *
 * You are currently designing a dynamic array. You are given a 0-indexed integer array nums,
 * where nums[i] is the number of elements that will be in the array at time i. In addition,
 * you are given an integer k, the maximum number of times you can resize the array (to any size).
 *
 * The size of the array at time t, sizet, must be at least nums[t] because there needs to be
 * enough space in the array to hold all the elements. The space wasted at time t is defined
 * as sizet - nums[t], and the total space wasted is the sum of the space wasted across every
 * time t where 0 <= t < nums.length.
 *
 * Return the minimum total space wasted if you can resize the array at most k times.
 *
 * Note: The array can have any size at the start and does not count towards the number of
 * resizing operations.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minSpaceWastedKResizing = function(nums, k) {
  const n = nums.length;
  const dp = new Array(n + 1).fill().map(() => new Array(k + 2).fill(Infinity));
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    let maxVal = 0;
    let sum = 0;

    for (let j = i; j > 0; j--) {
      maxVal = Math.max(maxVal, nums[j - 1]);
      sum += nums[j - 1];
      const waste = maxVal * (i - j + 1) - sum;

      for (let resizes = 0; resizes <= k; resizes++) {
        if (dp[j - 1][resizes] !== Infinity) {
          dp[i][resizes + 1] = Math.min(dp[i][resizes + 1], dp[j - 1][resizes] + waste);
        }
      }
    }
  }

  let result = Infinity;
  for (let resizes = 1; resizes <= k + 1; resizes++) {
    result = Math.min(result, dp[n][resizes]);
  }

  return result;
};
