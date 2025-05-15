/**
 * 2180. Count Integers With Even Digit Sum
 * https://leetcode.com/problems/count-integers-with-even-digit-sum/
 * Difficulty: Easy
 *
 * Given a positive integer num, return the number of positive integers less than or equal to num
 * whose digit sums are even.
 *
 * The digit sum of a positive integer is the sum of all its digits.
 */

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let current = i;
    while (current > 0) {
      sum += current % 10;
      current = Math.floor(current / 10);
    }
    if (sum % 2 === 0) {
      result++;
    }
  }

  return result;
};
