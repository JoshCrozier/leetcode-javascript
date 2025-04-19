/**
 * 1561. Maximum Number of Coins You Can Get
 * https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
 * Difficulty: Medium
 *
 * There are 3n piles of coins of varying size, you and your friends will take piles of coins as
 * follows:
 * - In each step, you will choose any 3 piles of coins (not necessarily consecutive).
 * - Of your choice, Alice will pick the pile with the maximum number of coins.
 * - You will pick the next pile with the maximum number of coins.
 * - Your friend Bob will pick the last pile.
 * - Repeat until there are no more piles of coins.
 *
 * Given an array of integers piles where piles[i] is the number of coins in the ith pile.
 *
 * Return the maximum number of coins that you can have.
 */

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
  piles.sort((a, b) => b - a);
  let result = 0;
  const rounds = piles.length / 3;

  for (let i = 1; i < piles.length - rounds; i += 2) {
    result += piles[i];
  }

  return result;
};
