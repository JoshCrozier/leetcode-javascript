/**
 * 2417. Closest Fair Integer
 * https://leetcode.com/problems/closest-fair-integer/
 * Difficulty: Medium
 *
 * You are given a positive integer n.
 *
 * We call an integer k fair if the number of even digits in k is equal to the number of
 * odd digits in it.
 *
 * Return the smallest fair integer that is greater than or equal to n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var closestFair = function(n) {
  const digitCount = n.toString().length;
  if (digitCount % 2 === 1) {
    return smallestFairNumberWithLength(digitCount + 1);
  }

  return hasEqualEvenOddDigits(n) ? n : closestFair(n + 1);

  function hasEqualEvenOddDigits(num) {
    const counts = [0, 0];
    while (num > 0) {
      counts[(num % 10) % 2]++;
      num = Math.floor(num / 10);
    }
    return counts[0] === counts[1];
  }

  function smallestFairNumberWithLength(length) {
    let result = '1';
    for (let i = 1; i <= length / 2; i++) {
      result += '0';
    }
    for (let i = length / 2 + 1; i < length; i++) {
      result += '1';
    }
    return parseInt(result);
  }
};
