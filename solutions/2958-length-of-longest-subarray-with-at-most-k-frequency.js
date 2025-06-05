/**
 * 2958. Length of Longest Subarray With at Most K Frequency
 * https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer k.
 *
 * The frequency of an element x is the number of times it occurs in an array.
 *
 * An array is called good if the frequency of each element in this array is less than or
 * equal to k.
 *
 * Return the length of the longest good subarray of nums.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
  const map = new Map();
  let result = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);

    while (map.get(nums[right]) > k) {
      map.set(nums[left], map.get(nums[left]) - 1);
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};
