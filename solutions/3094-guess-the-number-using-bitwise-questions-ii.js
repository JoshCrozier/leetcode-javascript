/**
 * 3094. Guess the Number Using Bitwise Questions II
 * https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/
 * Difficulty: Medium
 *
 * There is a number n between 0 and 230 - 1 (both inclusive) that you have to find.
 *
 * There is a pre-defined API int commonBits(int num) that helps you with your mission.
 * But here is the challenge, every time you call this function, n changes in some way.
 * But keep in mind, that you have to find the initial value of n.
 *
 * commonBits(int num) acts as follows:
 * - Calculate count which is the number of bits where both n and num have the same value
 *   in that position of their binary representation.
 * - n = n XOR num
 * - Return count.
 *
 * Return the number n.
 *
 * Note: In this world, all numbers are between 0 and 230 - 1 (both inclusive), thus for counting
 * common bits, we see only the first 30 bits of those numbers.
 */

/**
 * Definition of commonBits API.
 * @param {number} num
 * @return {integer}
 * var commonBits = function(num) {}
 */
/**
 * @return {number}
 */
var findNumber = function() {
  let result = 0;

  for (let bitMask = 1; bitMask < 1073741824; bitMask <<= 1) {
    if (commonBits(bitMask) > commonBits(bitMask)) {
      result |= bitMask;
    }
  }

  return result;
};
