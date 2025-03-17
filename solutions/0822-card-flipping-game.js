/**
 * 822. Card Flipping Game
 * https://leetcode.com/problems/card-flipping-game/
 * Difficulty: Medium
 *
 * You are given two 0-indexed integer arrays fronts and backs of length n, where the ith card has
 * the positive integer fronts[i] printed on the front and backs[i] printed on the back. Initially,
 * each card is placed on a table such that the front number is facing up and the other is facing
 * down. You may flip over any number of cards (possibly zero).
 *
 * After flipping the cards, an integer is considered good if it is facing down on some card and
 * not facing up on any card.
 *
 * Return the minimum possible good integer after flipping the cards. If there are no good integers,
 * return 0.
 */

/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
  const impossibleValues = new Set();
  const n = fronts.length;

  for (let i = 0; i < n; i++) {
    if (fronts[i] === backs[i]) {
      impossibleValues.add(fronts[i]);
    }
  }

  let minGoodValue = Infinity;

  for (let i = 0; i < n; i++) {
    if (!impossibleValues.has(fronts[i])) {
      minGoodValue = Math.min(minGoodValue, fronts[i]);
    }

    if (!impossibleValues.has(backs[i])) {
      minGoodValue = Math.min(minGoodValue, backs[i]);
    }
  }

  return minGoodValue === Infinity ? 0 : minGoodValue;
};
