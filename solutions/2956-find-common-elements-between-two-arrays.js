/**
 * 2956. Find Common Elements Between Two Arrays
 * https://leetcode.com/problems/find-common-elements-between-two-arrays/
 * Difficulty: Easy
 *
 * You are given two integer arrays nums1 and nums2 of sizes n and m, respectively.
 * Calculate the following values:
 * - answer1 : the number of indices i such that nums1[i] exists in nums2.
 * - answer2 : the number of indices i such that nums2[i] exists in nums1.
 *
 * Return [answer1,answer2].
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  let count1 = 0;
  let count2 = 0;

  for (const num of nums1) {
    if (set2.has(num)) {
      count1++;
    }
  }

  for (const num of nums2) {
    if (set1.has(num)) {
      count2++;
    }
  }

  return [count1, count2];
};
