/**
 * 829. Consecutive Numbers Sum
 * https://leetcode.com/problems/consecutive-numbers-sum/
 * Difficulty: Hard
 *
 * Given an integer n, return the number of ways you can write n as the sum of consecutive
 * positive integers.
 */

/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function(n) {
  let result = 0;

  for (let k = 1; k < Math.sqrt(2 * n); k++) {
    const numerator = n - (k * (k - 1)) / 2;
    if (numerator % k === 0) {
      const startingNum = numerator / k;
      if (startingNum > 0) {
        result++;
      }
    }
  }

  return result;
};
