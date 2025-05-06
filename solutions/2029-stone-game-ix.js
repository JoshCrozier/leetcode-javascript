/**
 * 2029. Stone Game IX
 * https://leetcode.com/problems/stone-game-ix/
 * Difficulty: Medium
 *
 * Alice and Bob continue their games with stones. There is a row of n stones, and each stone has
 * an associated value. You are given an integer array stones, where stones[i] is the value of the
 * ith stone.
 *
 * Alice and Bob take turns, with Alice starting first. On each turn, the player may remove any
 * stone from stones. The player who removes a stone loses if the sum of the values of all
 * removed stones is divisible by 3. Bob will win automatically if there are no remaining stones
 * (even if it is Alice's turn).
 *
 * Assuming both players play optimally, return true if Alice wins and false if Bob wins.
 */

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
  const remainderCount = [0, 0, 0];
  for (const stone of stones) {
    remainderCount[stone % 3]++;
  }

  if (remainderCount[0] % 2 === 0) {
    return remainderCount[1] >= 1 && remainderCount[2] >= 1;
  }

  return Math.abs(remainderCount[1] - remainderCount[2]) > 2;
};
