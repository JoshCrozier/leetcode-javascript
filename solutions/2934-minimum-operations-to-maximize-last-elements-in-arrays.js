/**
 * 2934. Minimum Operations to Maximize Last Elements in Arrays
 * https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/
 * Difficulty: Medium
 *
 * You are given two 0-indexed integer arrays, nums1 and nums2, both having length n.
 *
 * You are allowed to perform a series of operations (possibly none).
 *
 * In an operation, you select an index i in the range [0, n - 1] and swap the values of
 * nums1[i] and nums2[i].
 *
 * Your task is to find the minimum number of operations required to satisfy the following
 * conditions:
 * - nums1[n - 1] is equal to the maximum value among all elements of nums1, i.e.,
 *   nums1[n - 1] = max(nums1[0], nums1[1], ..., nums1[n - 1]).
 * - nums2[n - 1] is equal to the maximum value among all elements of nums2, i.e.,
 *   nums2[n - 1] = max(nums2[0], nums2[1], ..., nums2[n - 1]).
 *
 * Return an integer denoting the minimum number of operations needed to meet both conditions,
 * or -1 if it is impossible to satisfy both conditions.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
  const n = nums1.length;
  const last1 = nums1[n - 1];
  const last2 = nums2[n - 1];

  let swapsNoChange = 0;
  let swapsChange = 0;

  for (let i = 0; i < n - 1; i++) {
    if (nums1[i] > last1 || nums2[i] > last2) {
      if (nums2[i] > last1 || nums1[i] > last2) {
        return -1;
      }
      swapsNoChange++;
    }
    if (nums1[i] > last2 || nums2[i] > last1) {
      if (nums2[i] > last2 || nums1[i] > last1) {
        return -1;
      }
      swapsChange++;
    }
  }

  if (last1 !== last2) {
    swapsChange++;
  }

  return Math.min(swapsNoChange, swapsChange);
};
