/**
 * 2218. Maximum Value of K Coins From Piles
 * https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/
 * Difficulty: Hard
 *
 * There are n piles of coins on a table. Each pile consists of a positive number of coins of
 * assorted denominations.
 *
 * In one move, you can choose any coin on top of any pile, remove it, and add it to your wallet.
 *
 * Given a list piles, where piles[i] is a list of integers denoting the composition of the ith
 * pile from top to bottom, and a positive integer k, return the maximum total value of coins
 * you can have in your wallet if you choose exactly k coins optimally.
 */

/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
  const n = piles.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(-1));

  return maximize(0, k);

  function maximize(pileIndex, remainingCoins) {
    if (pileIndex === n || remainingCoins === 0) return 0;
    if (dp[pileIndex][remainingCoins] !== -1) return dp[pileIndex][remainingCoins];

    let maxValue = maximize(pileIndex + 1, remainingCoins);
    let currentSum = 0;

    for (let i = 0; i < Math.min(piles[pileIndex].length, remainingCoins); i++) {
      currentSum += piles[pileIndex][i];
      maxValue = Math.max(
        maxValue,
        currentSum + maximize(pileIndex + 1, remainingCoins - (i + 1))
      );
    }

    return dp[pileIndex][remainingCoins] = maxValue;
  }
};
