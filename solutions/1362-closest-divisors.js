/**
 * 1362. Closest Divisors
 * https://leetcode.com/problems/closest-divisors/
 * Difficulty: Medium
 *
 * Given an integer num, find the closest two integers in absolute difference whose product
 * equals num + 1 or num + 2.
 *
 * Return the two integers in any order.
 */

/**
 * @param {number} num
 * @return {number[]}
 */
function closestDivisors(num) {
  const pair1 = findClosestPair(num + 1);
  const pair2 = findClosestPair(num + 2);

  return Math.abs(pair1[1] - pair1[0]) <= Math.abs(pair2[1] - pair2[0]) ? pair1 : pair2;

  function findClosestPair(target) {
    let minDifference = Infinity;
    let pair = [];

    for (let divisor = 1; divisor <= Math.sqrt(target); divisor++) {
      if (target % divisor === 0) {
        const complement = target / divisor;
        const difference = Math.abs(complement - divisor);
        if (difference < minDifference) {
          minDifference = difference;
          pair = [divisor, complement];
        }
      }
    }

    return pair;
  }
}
