/**
 * 477. Total Hamming Distance
 * https://leetcode.com/problems/total-hamming-distance/
 * Difficulty: Medium
 *
 * The Hamming distance between two integers is the number of positions at which the
 * corresponding bits are different.
 *
 * Given an integer array nums, return the sum of Hamming distances between all the
 * pairs of the integers in nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  let result = 0;

  for (let bit = 0; bit < 32; bit++) {
    const ones = nums.reduce((count, n) => count + ((n >> bit) & 1), 0);
    result += ones * (nums.length - ones);
  }

  return result;
};
