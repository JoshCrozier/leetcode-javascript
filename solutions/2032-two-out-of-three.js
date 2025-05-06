/**
 * 2032. Two Out of Three
 * https://leetcode.com/problems/two-out-of-three/
 * Difficulty: Easy
 *
 * Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all
 * the values that are present in at least two out of the three arrays. You may return the
 * values in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);
  const count = new Map();

  for (const num of set1) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  for (const num of set2) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  for (const num of set3) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  const result = [];
  for (const [num, freq] of count) {
    if (freq >= 2) result.push(num);
  }

  return result;
};
