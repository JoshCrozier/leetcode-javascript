/**
 * 1523. Count Odd Numbers in an Interval Range
 * https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
 * Difficulty: Easy
 *
 * Given two non-negative integers low and high. Return the count of odd numbers between low
 * and high (inclusive).
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  const range = high - low + 1;

  if (low % 2 !== 0 && high % 2 !== 0) {
    return Math.floor(range / 2) + 1;
  }

  return Math.floor(range / 2);
};
