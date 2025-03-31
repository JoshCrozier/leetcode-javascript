/**
 * 1012. Numbers With Repeated Digits
 * https://leetcode.com/problems/numbers-with-repeated-digits/
 * Difficulty: Hard
 *
 * Given an integer n, return the number of positive integers in the range [1, n] that have at
 * least one repeated digit.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function(n) {
  const digits = String(n).split('').map(Number);
  const length = digits.length;
  let result = 0;

  function calculatePermutations(size, available) {
    let total = 1;
    for (let i = 0; i < size; i++) {
      total *= available - i;
    }
    return total;
  }

  for (let i = 1; i < length; i++) {
    result += 9 * calculatePermutations(i - 1, 9);
  }

  const used = new Set();
  for (let i = 0; i < length; i++) {
    const start = i === 0 ? 1 : 0;
    const limit = digits[i];

    for (let d = start; d < limit; d++) {
      if (!used.has(d)) {
        result += calculatePermutations(length - i - 1, 10 - used.size - 1);
      }
    }

    if (used.has(digits[i])) break;
    used.add(digits[i]);
    if (i === length - 1) result++;
  }

  return n - result;
};
