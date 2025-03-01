/**
 * 464. Can I Win
 * https://leetcode.com/problems/can-i-win/
 * Difficulty: Medium
 *
 * In the "100 game" two players take turns adding, to a running total, any integer from 1 to 10.
 * The player who first causes the running total to reach or exceed 100 wins.
 *
 * What if we change the game so that players cannot re-use integers?
 *
 * For example, two players might take turns drawing from a common pool of numbers from 1 to 15
 * without replacement until they reach a total >= 100.
 *
 * Given two integers maxChoosableInteger and desiredTotal, return true if the first player to
 * move can force a win, otherwise, return false. Assume both players play optimally.
 */

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  const memo = new Map();
  const sum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;

  if (desiredTotal <= 0) return true;
  if (sum < desiredTotal) return false;

  return check(0, desiredTotal);

  function check(state, remaining) {
    if (remaining <= 0) return false;

    const key = state.toString();
    if (memo.has(key)) return memo.get(key);

    for (let i = 1; i <= maxChoosableInteger; i++) {
      const mask = 1 << i;
      if (!(state & mask) && (i >= remaining || !check(state | mask, remaining - i))) {
        memo.set(key, true);
        return true;
      }
    }

    memo.set(key, false);
    return false;
  }
};
