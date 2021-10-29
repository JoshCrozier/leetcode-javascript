/**
 * 1437. Check If All 1's Are at Least Length K Places Away
 * https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
 * Difficulty: Easy
 *
 * Given an array nums of 0s and 1s and an integer k, return True if all 1's are at
 * least k places away from each other, otherwise return False.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let offset = k;
  for (const num of nums) {
    if (num === 0) { offset++; continue; }
    if (offset < k) return false;
    offset = 0;
  }
  return true;
};
