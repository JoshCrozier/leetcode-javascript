/**
 * 3400. Maximum Number of Matching Indices After Right Shifts
 * https://leetcode.com/problems/maximum-number-of-matching-indices-after-right-shifts/
 * Difficulty: Medium
 *
 * You are given two integer arrays, nums1 and nums2, of the same length.
 *
 * An index i is considered matching if nums1[i] == nums2[i].
 *
 * Return the maximum number of matching indices after performing any number of right shifts
 * on nums1.
 *
 * A right shift is defined as shifting the element at index i to index (i + 1) % n, for
 * all indices.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumMatchingIndices = function(nums1, nums2) {
  const n = nums1.length;
  let result = 0;

  for (let shift = 0; shift < n; shift++) {
    let currentMatches = 0;
    for (let i = 0; i < n; i++) {
      if (nums1[(i - shift + n) % n] === nums2[i]) {
        currentMatches++;
      }
    }
    result = Math.max(result, currentMatches);
  }

  return result;
};
