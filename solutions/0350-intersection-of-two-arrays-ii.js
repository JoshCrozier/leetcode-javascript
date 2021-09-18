/**
 * 350. Intersection of Two Arrays II
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * Difficulty: Easy
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 *
 * Each element in the result must appear as many times as it shows in both arrays
 * and you may return the result in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const result = [];
  const map = {};

  nums1.forEach(value => map[value] = (map[value] || 0) + 1);
  nums2.forEach(value => {
    if (map[value]) {
      result.push(value);
      map[value]--;
    }
  });

  return result;
};
