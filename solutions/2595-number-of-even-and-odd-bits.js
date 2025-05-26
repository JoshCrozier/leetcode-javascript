/**
 * 2595. Number of Even and Odd Bits
 * https://leetcode.com/problems/number-of-even-and-odd-bits/
 * Difficulty: Easy
 *
 * You are given a positive integer n.
 *
 * Let even denote the number of even indices in the binary representation of n with value 1.
 *
 * Let odd denote the number of odd indices in the binary representation of n with value 1.
 *
 * Note that bits are indexed from right to left in the binary representation of a number.
 *
 * Return the array [even, odd].
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
  let evenCount = 0;
  let oddCount = 0;
  let index = 0;

  while (n > 0) {
    if (n & 1) {
      if (index % 2 === 0) evenCount++;
      else oddCount++;
    }
    n >>= 1;
    index++;
  }

  return [evenCount, oddCount];
};
