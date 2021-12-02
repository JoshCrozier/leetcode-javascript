/**
 * 1486. XOR Operation in an Array
 * https://leetcode.com/problems/xor-operation-in-an-array/
 * Difficulty: Easy
 *
 * Given an integer n and an integer start.
 *
 * Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
 *
 * Return the bitwise XOR of all elements of nums.
 */

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  return new Array(n)
    .fill(0)
    .map((_, i) => start + 2 * i)
    .reduce((result, n) => result ^ n, 0);
};
