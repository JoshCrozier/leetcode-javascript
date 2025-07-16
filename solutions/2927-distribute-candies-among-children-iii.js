/**
 * 2927. Distribute Candies Among Children III
 * https://leetcode.com/problems/distribute-candies-among-children-iii/
 * Difficulty: Hard
 *
 * You are given two positive integers n and limit.
 *
 * Return the total number of ways to distribute n candies among 3 children such that no child
 * gets more than limit candies.
 */

/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
  if (n > 3 * limit) return 0;

  const overLimit = limit + 1;
  return countWays(n) - 3 * countWays(n - overLimit)
    + 3 * countWays(n - 2 * overLimit) - countWays(n - 3 * overLimit);

  function countWays(candies) {
    if (candies < 0) return 0;
    return Math.floor((candies + 2) * (candies + 1) / 2);
  }
};
