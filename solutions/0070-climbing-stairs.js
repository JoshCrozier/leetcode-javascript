/**
 * 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 * Difficulty: Easy
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct
 * ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const cache = new Map();
  const memo = n => {
    if (n < 4) return n;
    if (!cache.has(n)) {
      cache.set(n, memo(n - 2) + memo(n - 1));
    }
    return cache.get(n);
  };
  return memo(n);
};
