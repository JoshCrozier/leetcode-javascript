/**
 * 454. 4Sum II
 * https://leetcode.com/problems/4sum-ii/
 * Difficulty: Medium
 *
 * Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number
 * of tuples (i, j, k, l) such that:
 * - 0 <= i, j, k, l < n
 * - nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map = new Map();
  nums1.forEach(n1 => {
    nums2.forEach(n2 => map.set(n1 + n2, (map.get(n1 + n2) || 0) + 1));
  });
  return nums3.reduce((count, n3) => {
    return count + nums4.reduce((sum, n4) => sum + (map.get(-(n3 + n4)) || 0), 0);
  }, 0);
};
