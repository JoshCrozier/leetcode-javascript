/**
 * 762. Prime Number of Set Bits in Binary Representation
 * https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
 * Difficulty: Easy
 *
 * Given two integers left and right, return the count of numbers in the inclusive range [left, right] having
 * a prime number of set bits in their binary representation.
 *
 * Recall that the number of set bits an integer has is the number of 1's present when written in binary.
 *
 * For example, 21 written in binary is 10101, which has 3 set bits.
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
  const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
  let result = 0;

  for (let i = left; i <= right; i++) {
    if (primes.has(i.toString(2).replace(/0+/g, '').length)) {
      result++;
    }
  }

  return result;
};
