/**
 * 1686. Stone Game VI
 * https://leetcode.com/problems/stone-game-vi/
 * Difficulty: Medium
 *
 * Alice and Bob take turns playing a game, with Alice starting first.
 *
 * There are n stones in a pile. On each player's turn, they can remove a stone from the pile and
 * receive points based on the stone's value. Alice and Bob may value the stones differently.
 *
 * You are given two integer arrays of length n, aliceValues and bobValues. Each aliceValues[i]
 * and bobValues[i] represents how Alice and Bob, respectively, value the ith stone.
 *
 * The winner is the person with the most points after all the stones are chosen. If both players
 * have the same amount of points, the game results in a draw. Both players will play optimally.
 * Both players know the other's values.
 *
 * Determine the result of the game, and:
 * - If Alice wins, return 1.
 * - If Bob wins, return -1.
 * - If the game results in a draw, return 0.
 */

/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function(aliceValues, bobValues) {
  const n = aliceValues.length;
  const stones = aliceValues.map((alice, i) => ({
    sum: alice + bobValues[i],
    alice: alice,
    bob: bobValues[i]
  }));

  stones.sort((a, b) => b.sum - a.sum);

  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      aliceScore += stones[i].alice;
    } else {
      bobScore += stones[i].bob;
    }
  }

  return aliceScore > bobScore ? 1 : aliceScore < bobScore ? -1 : 0;
};
