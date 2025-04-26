/**
 * 1690. Stone Game VII
 * https://leetcode.com/problems/stone-game-vii/
 * Difficulty: Medium
 *
 * Alice and Bob take turns playing a game, with Alice starting first.
 *
 * There are n stones arranged in a row. On each player's turn, they can remove either the leftmost
 * stone or the rightmost stone from the row and receive points equal to the sum of the remaining
 * stones' values in the row. The winner is the one with the higher score when there are no stones
 * left to remove.
 *
 * Bob found that he will always lose this game (poor Bob, he always loses), so he decided to
 * minimize the score's difference. Alice's goal is to maximize the difference in the score.
 *
 * Given an array of integers stones where stones[i] represents the value of the ith stone from
 * the left, return the difference in Alice and Bob's score if they both play optimally.
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
  const n = stones.length;
  const prefixSum = new Array(n + 1).fill(0);
  const dp = new Array(n).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + stones[i];
  }

  for (let len = 2; len <= n; len++) {
    for (let start = 0; start <= n - len; start++) {
      const end = start + len - 1;
      const leftScore = prefixSum[end + 1] - prefixSum[start + 1] - dp[start + 1][end];
      const rightScore = prefixSum[end] - prefixSum[start] - dp[start][end - 1];
      dp[start][end] = Math.max(leftScore, rightScore);
    }
  }

  return dp[0][n - 1];
};
