/**
 * 4. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * Difficulty: Hard
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 *
 * You may assume nums1 and nums2 cannot be both empty.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const total = nums1.length + nums2.length;
  const limit = Math.floor(total / 2) + 1;
  let i = 0, j = 0, prev, last

  while(i + j < limit) {
    if (last !== undefined) {
      prev = last;
    }
    if (nums1[i] < nums2[j] || j === nums2.length) {
      last = nums1[i++];
    } else {
      last = nums2[j++];
    }
  }

  return total % 2 === 0 ? (prev + last) / 2 : last;
};

// shorter/readable alternative with higher time complexity:
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const sorted = [...nums1, ...nums2].sort((a, b) => a - b);
  const index = Math.floor((sorted.length - 1) / 2);
  return sorted.length % 2 === 0
    ? (sorted[index] + sorted[index + 1]) / 2
    : sorted[index];
};
