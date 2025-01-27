/**
 * 1985. Find the Kth Largest Integer in the Array
 * https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/
 * Difficulty: Medium
 *
 * You are given an array of strings nums and an integer k. Each string in nums
 * represents an integer without leading zeros.
 *
 * Return the string that represents the kth largest integer in nums.
 *
 * Note: Duplicate numbers should be counted distinctly. For example, if nums is
 * ["1","2","2"], "2" is the first largest integer, "2" is the second-largest
 * integer, and "1" is the third-largest integer.
 */

/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
  return String(nums.map(BigInt).sort((a, b) => b - a >= 0 ? 1 : -1)[k - 1]);
};
