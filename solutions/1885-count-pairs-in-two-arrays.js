/**
 * 1885. Count Pairs in Two Arrays
 * https://leetcode.com/problems/count-pairs-in-two-arrays/
 * Difficulty: Medium
 *
 * Given two integer arrays nums1 and nums2 of length n, count the pairs of indices (i, j)
 * such that i < j and nums1[i] + nums1[j] > nums2[i] + nums2[j].
 *
 * Return the number of pairs satisfying the condition.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var countPairs = function(nums1, nums2) {
  const differences = nums1.map((val, i) => val - nums2[i]);
  differences.sort((a, b) => a - b);

  let count = 0;
  let left = 0;
  let right = differences.length - 1;

  while (left < right) {
    if (differences[left] + differences[right] > 0) {
      count += right - left;
      right--;
    } else {
      left++;
    }
  }

  return count;
};
