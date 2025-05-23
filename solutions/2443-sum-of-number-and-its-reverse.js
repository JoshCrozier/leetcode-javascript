/**
 * 2443. Sum of Number and Its Reverse
 * https://leetcode.com/problems/sum-of-number-and-its-reverse/
 * Difficulty: Medium
 *
 * Given a non-negative integer num, return true if num can be expressed as the sum of any
 * non-negative integer and its reverse, or false otherwise.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
  for (let i = 0; i <= num; i++) {
    let reversed = 0;
    let temp = i;
    while (temp > 0) {
      reversed = reversed * 10 + temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (i + reversed === num) {
      return true;
    }
  }

  return false;
};
