/**
 * 1855. Maximum Distance Between a Pair of Values
 * https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
 * Difficulty: Medium
 *
 * You are given two non-increasing 0-indexed integer arrays nums2 and nums2.
 *
 * A pair of indices (i, j), where 0 <= i < nums1.length and 0 <= j < nums2.length,
 * is valid if both i <= j and nums1[i] <= nums2[j]. The distance of the pair is j - i.
 *
 * Return the maximum distance of any valid pair (i, j). If there are no valid pairs, return 0.
 *
 * An array arr is non-increasing if arr[i-1] >= arr[i] for every 1 <= i < arr.length.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
  let result = 0;
  let left = 0;

  for (let right = 0; right < nums2.length; right++) {
    while (left < nums1.length && nums1[left] > nums2[right]) {
      left++;
    }
    if (left <= right && left < nums1.length) {
      result = Math.max(result, right - left);
    }
  }

  return result;
};
