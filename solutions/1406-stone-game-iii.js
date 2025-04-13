/**
 * 1406. Stone Game III
 * https://leetcode.com/problems/stone-game-iii/
 * Difficulty: Hard
 *
 * Alice and Bob continue their games with piles of stones. There are several stones arranged
 * in a row, and each stone has an associated value which is an integer given in the array
 * stoneValue.
 *
 * Alice and Bob take turns, with Alice starting first. On each player's turn, that player can
 * take 1, 2, or 3 stones from the first remaining stones in the row.
 *
 * The score of each player is the sum of the values of the stones taken. The score of each
 * player is 0 initially.
 *
 * The objective of the game is to end with the highest score, and the winner is the player
 * with the highest score and there could be a tie. The game continues until all the stones
 * have been taken.
 *
 * Assume Alice and Bob play optimally.
 *
 * Return "Alice" if Alice will win, "Bob" if Bob will win, or "Tie" if they will end the game
 * with the same score.
 */

/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
  const n = stoneValue.length;
  const cache = new Array(n + 1).fill(null);

  function findOptimalScore(index) {
    if (index >= n) return 0;
    if (cache[index] !== null) return cache[index];

    let maxScore = -Infinity;
    let currentSum = 0;

    for (let stones = 1; stones <= 3 && index + stones - 1 < n; stones++) {
      currentSum += stoneValue[index + stones - 1];
      const opponentScore = findOptimalScore(index + stones);
      maxScore = Math.max(maxScore, currentSum + (index + stones < n ? -opponentScore : 0));
    }

    cache[index] = maxScore;
    return maxScore;
  }

  const aliceScore = findOptimalScore(0);
  if (aliceScore > 0) return 'Alice';
  if (aliceScore < 0) return 'Bob';
  return 'Tie';
};
