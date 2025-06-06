/**
 * 2980. Check if Bitwise OR Has Trailing Zeros
 * https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/
 * Difficulty: Easy
 *
 * You are given an array of positive integers nums.
 *
 * You have to check if it is possible to select two or more elements in the array such
 * that the bitwise OR of the selected elements has at least one trailing zero in its
 * binary representation.
 *
 * For example, the binary representation of 5, which is "101", does not have any trailing
 * zeros, whereas the binary representation of 4, which is "100", has two trailing zeros.
 *
 * Return true if it is possible to select two or more elements whose bitwise OR has trailing
 * zeros, return false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
  let evenCount = 0;

  for (const num of nums) {
    if (num % 2 === 0) {
      evenCount++;
      if (evenCount >= 2) {
        return true;
      }
    }
  }

  return false;
};
