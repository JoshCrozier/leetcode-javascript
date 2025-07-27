/**
 * 2231. Largest Number After Digit Swaps by Parity
 * https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/
 * Difficulty: Easy
 *
 * You are given a positive integer num. You may swap any two digits of num that have the
 * same parity (i.e. both odd digits or both even digits).
 *
 * Return the largest possible value of num after any number of swaps.
 */

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
  const digits = num.toString().split('').map(Number);
  const evenDigits = [];
  const oddDigits = [];

  for (const digit of digits) {
    if (digit % 2 === 0) {
      evenDigits.push(digit);
    } else {
      oddDigits.push(digit);
    }
  }

  evenDigits.sort((a, b) => b - a);
  oddDigits.sort((a, b) => b - a);

  let evenIndex = 0;
  let oddIndex = 0;
  const result = [];

  for (const digit of digits) {
    if (digit % 2 === 0) {
      result.push(evenDigits[evenIndex++]);
    } else {
      result.push(oddDigits[oddIndex++]);
    }
  }

  return parseInt(result.join(''), 10);
};
