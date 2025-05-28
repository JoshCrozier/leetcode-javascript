/**
 * 2652. Sum Multiples
 * https://leetcode.com/problems/sum-multiples/
 * Difficulty: Easy
 *
 * Given a positive integer n, find the sum of all integers in the range [1, n] inclusive
 * that are divisible by 3, 5, or 7.
 *
 * Return an integer denoting the sum of all numbers in the given range satisfying the constraint.
 */

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
  return sumDivisibleBy(3) + sumDivisibleBy(5) + sumDivisibleBy(7)
    - sumDivisibleBy(15) - sumDivisibleBy(21) - sumDivisibleBy(35)
    + sumDivisibleBy(105);

  function sumDivisibleBy(divisor) {
    const count = Math.floor(n / divisor);
    return divisor * count * (count + 1) / 2;
  }
};
