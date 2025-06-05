/**
 * 2928. Distribute Candies Among Children I
 * https://leetcode.com/problems/distribute-candies-among-children-i/
 * Difficulty: Easy
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
  let result = 0;

  for (let i = 0; i <= Math.min(n, limit); i++) {
    for (let j = 0; j <= Math.min(n - i, limit); j++) {
      const k = n - i - j;
      if (k >= 0 && k <= limit) result++;
    }
  }

  return result;
};
