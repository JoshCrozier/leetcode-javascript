/**
 * 3064. Guess the Number Using Bitwise Questions I
 * https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/
 * Difficulty: Medium
 *
 * There is a number n that you have to find.
 *
 * There is also a pre-defined API int commonSetBits(int num), which returns the number of bits
 * where both n and num are 1 in that position of their binary representation. In other words,
 * it returns the number of set bits in n & num, where & is the bitwise AND operator.
 *
 * Return the number n.
 */

/**
 * Definition of commonSetBits API.
 * @param {number} num
 * @return {integer}
 * var commonSetBits = function(num) {}
 */

/**
 * @return {number}
 */
var findNumber = function() {
  let result = 0;

  for (let bitPosition = 0; bitPosition < 30; bitPosition++) {
    const powerOfTwo = 1 << bitPosition;
    if (commonSetBits(powerOfTwo) === 1) {
      result |= powerOfTwo;
    }
  }

  return result;
};
