/**
 * 2090. K Radius Subarray Averages
 * https://leetcode.com/problems/k-radius-subarray-averages/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array nums of n integers, and an integer k.
 *
 * The k-radius average for a subarray of nums centered at some index i with the radius k is
 * the average of all elements in nums between the indices i - k and i + k (inclusive). If
 * there are less than k elements before or after the index i, then the k-radius average is -1.
 *
 * Build and return an array avgs of length n where avgs[i] is the k-radius average for the
 * subarray centered at index i.
 *
 * The average of x elements is the sum of the x elements divided by x, using integer division.
 * The integer division truncates toward zero, which means losing its fractional part.
 * - For example, the average of four elements 2, 3, 1, and
 *   5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
  const n = nums.length;
  const windowSize = 2 * k + 1;
  const result = new Array(n).fill(-1);

  if (windowSize > n) return result;

  let sum = 0;
  for (let i = 0; i < windowSize; i++) {
    sum += nums[i];
  }

  result[k] = Math.floor(sum / windowSize);

  for (let i = k + 1; i < n - k; i++) {
    sum = sum - nums[i - k - 1] + nums[i + k];
    result[i] = Math.floor(sum / windowSize);
  }

  return result;
};
