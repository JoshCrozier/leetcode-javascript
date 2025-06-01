/**
 * 2929. Distribute Candies Among Children II
 * https://leetcode.com/problems/distribute-candies-among-children-ii/
 * Difficulty: Medium
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
  const minCandies = Math.max(0, n - 2 * limit);
  const maxCandies = Math.min(n, limit);
  let result = 0;

  for (let i = minCandies; i <= maxCandies; i++) {
    const remaining = n - i;
    const minSecond = Math.max(0, remaining - limit);
    const maxSecond = Math.min(remaining, limit);
    result += maxSecond - minSecond + 1;
  }

  return result;
};
