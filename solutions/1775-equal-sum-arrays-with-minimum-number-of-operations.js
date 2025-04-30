/**
 * 1775. Equal Sum Arrays With Minimum Number of Operations
 * https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/
 * Difficulty: Medium
 *
 * You are given two arrays of integers nums1 and nums2, possibly of different lengths. The values
 * in the arrays are between 1 and 6, inclusive.
 *
 * In one operation, you can change any integer's value in any of the arrays to any value between
 * 1 and 6, inclusive.
 *
 * Return the minimum number of operations required to make the sum of values in nums1 equal to
 * the sum of values in nums2. Return -1 if it is not possible to make the sum of the two arrays
 * equal.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
  let sum1 = nums1.reduce((a, b) => a + b, 0);
  let sum2 = nums2.reduce((a, b) => a + b, 0);

  if (sum1 < sum2) {
    [nums1, nums2, sum1, sum2] = [nums2, nums1, sum2, sum1];
  }

  const maxSum1 = nums1.length * 6;
  const minSum1 = nums1.length;
  const maxSum2 = nums2.length * 6;
  const minSum2 = nums2.length;

  if (maxSum1 < minSum2 || maxSum2 < minSum1) return -1;

  let result = 0;
  const gains = [];
  const losses = [];

  for (const num of nums1) {
    losses.push(num - 1);
  }
  for (const num of nums2) {
    gains.push(6 - num);
  }

  losses.sort((a, b) => b - a);
  gains.sort((a, b) => b - a);

  let i = 0;
  let j = 0;
  let diff = sum1 - sum2;

  while (diff > 0 && (i < losses.length || j < gains.length)) {
    const change = i < losses.length && (j >= gains.length || losses[i] >= gains[j])
      ? losses[i++]
      : gains[j++];
    const take = Math.min(diff, change);
    diff -= take;
    result++;
  }

  return result;
};
