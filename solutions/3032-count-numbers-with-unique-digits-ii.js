/**
 * 3032. Count Numbers With Unique Digits II
 * https://leetcode.com/problems/count-numbers-with-unique-digits-ii/
 * Difficulty: Easy
 *
 * Given two positive integers a and b, return the count of numbers having unique digits
 * in the range [a, b] (inclusive).
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var numberCount = function(a, b) {
  let result = 0;

  for (let number = a; number <= b; number++) {
    if (hasUniqueDigits(number)) {
      result++;
    }
  }

  return result;

  function hasUniqueDigits(number) {
    const set = new Set();

    while (number > 0) {
      const digit = number % 10;
      if (set.has(digit)) {
        return false;
      }
      set.add(digit);
      number = Math.floor(number / 10);
    }

    return true;
  }
};
