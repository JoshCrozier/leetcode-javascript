/**
 * 2605. Form Smallest Number From Two Digit Arrays
 * https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/
 * Difficulty: Easy
 *
 * Given two arrays of unique digits nums1 and nums2, return the smallest number that contains
 * at least one digit from each array.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const min1 = Math.min(...nums1);
  const min2 = Math.min(...nums2);
  let smallestCommon = 10;

  for (const digit of set1) {
    if (set2.has(digit) && digit < smallestCommon) {
      smallestCommon = digit;
    }
  }

  if (smallestCommon !== 10) return smallestCommon;

  return min1 < min2 ? min1 * 10 + min2 : min2 * 10 + min1;
};
