/**
 * 349. Intersection of Two Arrays
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * Difficulty: Easy
 *
 * Given two integer arrays `nums1` and `nums2`, return an array of their intersection.
 *
 * Each element in the result must be unique and you may return the result in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set = new Set(nums1);
  return nums2.filter(value => set.delete(value));
};
