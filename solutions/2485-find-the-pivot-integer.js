/**
 * 2485. Find the Pivot Integer
 * https://leetcode.com/problems/find-the-pivot-integer/
 * Difficulty: Easy
 *
 * Given a positive integer n, find the pivot integer x such that:
 * - The sum of all elements between 1 and x inclusively equals the sum of all elements between
 *   x and n inclusively.
 *
 * Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there
 * will be at most one pivot index for the given input.
 */

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
  const totalSum = n * (n + 1) / 2;
  const pivot = Math.sqrt(totalSum);
  return Number.isInteger(pivot) && pivot <= n ? pivot : -1;
};
