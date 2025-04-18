/**
 * 1537. Get the Maximum Score
 * https://leetcode.com/problems/get-the-maximum-score/
 * Difficulty: Hard
 *
 * You are given two sorted arrays of distinct integers nums1 and nums2.
 *
 * A valid path is defined as follows:
 * - Choose array nums1 or nums2 to traverse (from index-0).
 * - Traverse the current array from left to right.
 * - If you are reading any value that is present in nums1 and nums2 you are allowed to change
 *   your path to the other array. (Only one repeated value is considered in the valid path).
 *
 * The score is defined as the sum of unique values in a valid path.
 *
 * Return the maximum score you can obtain of all possible valid paths. Since the answer may be
 * too large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function(nums1, nums2) {
  const MOD = 1e9 + 7;
  const m = nums1.length;
  const n = nums2.length;
  let i = 0;
  let j = 0;
  let sum1 = 0;
  let sum2 = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      sum1 += nums1[i++];
    } else if (nums1[i] > nums2[j]) {
      sum2 += nums2[j++];
    } else {
      sum1 = sum2 = Math.max(sum1, sum2) + nums1[i];
      i++;
      j++;
    }
  }

  while (i < m) {
    sum1 += nums1[i++];
  }

  while (j < n) {
    sum2 += nums2[j++];
  }

  return Math.max(sum1, sum2) % MOD;
};
