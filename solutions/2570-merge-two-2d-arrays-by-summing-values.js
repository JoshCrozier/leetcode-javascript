/**
 * 2570. Merge Two 2D Arrays by Summing Values
 * https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/
 * Difficulty: Easy
 *
 * You are given two 2D integer arrays nums1 and nums2.
 * - nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
 * - nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
 *
 * Each array contains unique ids and is sorted in ascending order by id.
 *
 * Merge the two arrays into one array that is sorted in ascending order by id, respecting the
 * following conditions:
 * - Only ids that appear in at least one of the two arrays should be included in the resulting
 *   array.
 * - Each id should be included only once and its value should be the sum of the values of this
 *   id in the two arrays. If the id does not exist in one of the two arrays, then assume its
 *   value in that array to be 0.
 *
 * Return the resulting array. The returned array must be sorted in ascending order by id.
 */

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
  const map = new Map(nums1);
  for (const [key, value] of nums2) {
    map.set(key, (map.get(key) ?? 0) + value);
  }
  return [...map].sort((a, b) => a[0] - b[0]);
};
