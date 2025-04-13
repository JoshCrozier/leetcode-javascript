/**
 * 1390. Four Divisors
 * https://leetcode.com/problems/four-divisors/
 * Difficulty: Medium
 *
 * Given an integer array nums, return the sum of divisors of the integers in that array
 * that have exactly four divisors. If there is no such integer in the array, return 0.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  function countDivisors(num) {
    const divisors = new Set();
    for (let i = 1; i * i <= num; i++) {
      if (num % i === 0) {
        divisors.add(i);
        divisors.add(num / i);
      }
    }
    return divisors;
  }

  let result = 0;
  for (const num of nums) {
    const divisors = countDivisors(num);
    if (divisors.size === 4) {
      const sum = [...divisors].reduce((acc, val) => acc + val, 0);
      result += sum;
    }
  }

  return result;
};
