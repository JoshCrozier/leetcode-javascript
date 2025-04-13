/**
 * 1399. Count Largest Group
 * https://leetcode.com/problems/count-largest-group/
 * Difficulty: Easy
 *
 * You are given an integer n.
 *
 * Each number from 1 to n is grouped according to the sum of its digits.
 *
 * Return the number of groups that have the largest size.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  const map = new Map();
  let maxSize = 0;

  for (let num = 1; num <= n; num++) {
    const digitSum = calculateDigitSum(num);
    const size = (map.get(digitSum) || 0) + 1;
    map.set(digitSum, size);
    maxSize = Math.max(maxSize, size);
  }

  let result = 0;
  for (const size of map.values()) {
    if (size === maxSize) result++;
  }

  return result;
};

function calculateDigitSum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
