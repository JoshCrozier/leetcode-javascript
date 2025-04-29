/**
 * 1753. Maximum Score From Removing Stones
 * https://leetcode.com/problems/maximum-score-from-removing-stones/
 * Difficulty: Medium
 *
 * You are playing a solitaire game with three piles of stones of sizes a, b, and c respectively.
 * Each turn you choose two different non-empty piles, take one stone from each, and add 1 point
 * to your score. The game stops when there are fewer than two non-empty piles (meaning there are
 * no more available moves).
 *
 * Given three integers a, b, and c return the maximum score you can get.
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
  const piles = [a, b, c].sort((x, y) => y - x);
  let score = 0;

  while (piles[0] > 0 && piles[1] > 0) {
    piles[0]--;
    piles[1]--;
    score++;
    piles.sort((x, y) => y - x);
  }

  return score;
};
