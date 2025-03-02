/**
 * 473. Matchsticks to Square
 * https://leetcode.com/problems/matchsticks-to-square/
 * Difficulty: Medium
 *
 * You are given an integer array matchsticks where matchsticks[i] is the length of the ith
 * matchstick. You want to use all the matchsticks to make one square. You should not break
 * any stick, but you can link them up, and each matchstick must be used exactly one time.
 *
 * Return true if you can make this square and false otherwise.
 */

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
  if (matchsticks.length < 4) return false;
  const sum = matchsticks.reduce((a, b) => a + b);
  if (sum % 4) return false;

  const side = sum / 4;
  matchsticks.sort((a, b) => b - a);
  if (matchsticks[0] > side) return false;

  const sides = [0, 0, 0, 0];
  return (function backtrack(index) {
    if (index === matchsticks.length) return true;
    for (let i = 0; i < 4; i++) {
      if (sides[i] + matchsticks[index] <= side) {
        sides[i] += matchsticks[index];
        if (backtrack(index + 1)) return true;
        sides[i] -= matchsticks[index];
        if (!sides[i]) break;
      }
    }
    return false;
  })(0);
};
