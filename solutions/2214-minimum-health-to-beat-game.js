/**
 * 2214. Minimum Health to Beat Game
 * https://leetcode.com/problems/minimum-health-to-beat-game/
 * Difficulty: Medium
 *
 * You are playing a game that has n levels numbered from 0 to n - 1. You are given a 0-indexed
 * integer array damage where damage[i] is the amount of health you will lose to complete the
 * ith level.
 *
 * You are also given an integer armor. You may use your armor ability at most once during the
 * game on any level which will protect you from at most armor damage.
 *
 * You must complete the levels in order and your health must be greater than 0 at all times to
 * beat the game.
 *
 * Return the minimum health you need to start with to beat the game.
 */

/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
var minimumHealth = function(damage, armor) {
  const totalDamage = damage.reduce((sum, dmg) => sum + dmg, 0);
  const maxDamage = Math.max(...damage);
  const armorReduction = Math.min(armor, maxDamage);

  return totalDamage - armorReduction + 1;
};
