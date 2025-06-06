/**
 * 3002. Maximum Size of a Set After Removals
 * https://leetcode.com/problems/maximum-size-of-a-set-after-removals/
 * Difficulty: Medium
 *
 * You are given two 0-indexed integer arrays nums1 and nums2 of even length n.
 *
 * You must remove n / 2 elements from nums1 and n / 2 elements from nums2. After the removals,
 * you insert the remaining elements of nums1 and nums2 into a set s.
 *
 * Return the maximum possible size of the set s.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumSetSize = function(nums1, nums2) {
  const n = nums1.length;
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  let unique1 = set1.size;
  let unique2 = set2.size;
  let common = 0;

  for (const num of set1) {
    if (set2.has(num)) common++;
  }

  unique1 -= common;
  unique2 -= common;

  const max1 = Math.min(unique1, n / 2);
  const max2 = Math.min(unique2, n / 2);
  const remaining = n / 2 - max1 + n / 2 - max2;
  const maxCommon = Math.min(common, remaining);

  return max1 + max2 + maxCommon;
};
