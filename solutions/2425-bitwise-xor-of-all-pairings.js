/**
 * 2425. Bitwise XOR of All Pairings
 * https://leetcode.com/problems/bitwise-xor-of-all-pairings/
 * Difficulty: Medium
 *
 * You are given two 0-indexed arrays, nums1 and nums2, consisting of non-negative integers.
 * There exists another array, nums3, which contains the bitwise XOR of all pairings of
 * integers between nums1 and nums2 (every integer in nums1 is paired with every integer
 * in nums2 exactly once).
 *
 * Return the bitwise XOR of all integers in nums3.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
  const xor = (a, b) => a.length % 2 ? b.reduce((x, y) => x ^ y): 0;
  return xor(nums1, nums2) ^ xor(nums2, nums1);
};
