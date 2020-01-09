/**
 * 970. Powerful Integers
 * https://leetcode.com/problems/powerful-integers/
 * Difficulty: Easy
 *
 * Given two positive integers x and y, an integer
 * is powerful if it is equal to x^i + y^j for some
 * integers i >= 0 and j >= 0.
 *
 * Return a list of all powerful integers that have
 * value less than or equal to bound.
 *
 * You may return the answer in any order.  In your
 * answer, each value should occur at most once.
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  const result = new Set();

  for (let i = 1; i < bound; i *= x) {
    for (let j = 1; i + j <= bound; j *= y) {
      result.add(i + j);

      if (y === 1) { break };
    }

    if (x === 1) { break };
  }

  return Array.from(result);
};
