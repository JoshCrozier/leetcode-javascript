/**
 * 967. Numbers With Same Consecutive Differences
 * https://leetcode.com/problems/numbers-with-same-consecutive-differences/
 * Difficulty: Medium
 *
 * Given two integers n and k, return an array of all the integers of length n where the difference
 * between every two consecutive digits is k. You may return the answer in any order.
 *
 * Note that the integers should not have leading zeros. Integers as 02 and 043 are not allowed.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
  const result = [];

  for (let digit = 1; digit <= 9; digit++) {
    buildNumber(digit, n - 1);
  }

  return result;

  function buildNumber(current, digitsLeft) {
    if (digitsLeft === 0) {
      result.push(current);
      return;
    }

    const lastDigit = current % 10;

    if (lastDigit + k <= 9) {
      buildNumber(current * 10 + lastDigit + k, digitsLeft - 1);
    }

    if (k !== 0 && lastDigit - k >= 0) {
      buildNumber(current * 10 + lastDigit - k, digitsLeft - 1);
    }
  }
};
