/**
 * 1140. Stone Game II
 * https://leetcode.com/problems/stone-game-ii/
 * Difficulty: Medium
 *
 * Alice and Bob continue their games with piles of stones. There are a number of piles arranged
 * in a row, and each pile has a positive integer number of stones piles[i]. The objective of
 * the game is to end with the most stones.
 *
 * Alice and Bob take turns, with Alice starting first.
 *
 * On each player's turn, that player can take all the stones in the first X remaining piles,
 * where 1 <= X <= 2M. Then, we set M = max(M, X). Initially, M = 1.
 *
 * The game continues until all the stones have been taken.
 *
 * Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.
 */

/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  const n = piles.length;
  const cache = new Map();
  const suffixSums = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    suffixSums[i] = suffixSums[i + 1] + piles[i];
  }

  return maxStones(0, 1);

  function maxStones(index, m) {
    if (index >= n) return 0;
    if (2 * m >= n - index) return suffixSums[index];

    const key = `${index},${m}`;
    if (cache.has(key)) return cache.get(key);

    let opponentMin = Infinity;
    for (let x = 1; x <= 2 * m; x++) {
      opponentMin = Math.min(opponentMin, maxStones(index + x, Math.max(m, x)));
    }

    const result = suffixSums[index] - opponentMin;
    cache.set(key, result);
    return result;
  }
};
