/**
 * 1563. Stone Game V
 * https://leetcode.com/problems/stone-game-v/
 * Difficulty: Hard
 *
 * There are several stones arranged in a row, and each stone has an associated value which
 * is an integer given in the array stoneValue.
 *
 * In each round of the game, Alice divides the row into two non-empty rows (i.e. left row and
 * right row), then Bob calculates the value of each row which is the sum of the values of all
 * the stones in this row. Bob throws away the row which has the maximum value, and Alice's
 * score increases by the value of the remaining row. If the value of the two rows are equal,
 * Bob lets Alice decide which row will be thrown away. The next round starts with the remaining
 * row.
 *
 * The game ends when there is only one stone remaining. Alice's is initially zero.
 *
 * Return the maximum score that Alice can obtain.
 */

/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
  const n = stoneValue.length;
  const prefixScore = Array.from({ length: n + 1 }, () => 0);
  const dp = Array.from({ length: n }, () => new Array(n).fill(-1));

  for (let index = 1; index <= n; index++) {
    prefixScore[index] = prefixScore[index - 1] + stoneValue[index - 1];
  }

  return getMaxScore(0, n - 1);

  function getMaxScore(left, right) {
    if (left >= right) return 0;
    if (dp[left][right] !== -1) return dp[left][right];
    let result = 0;

    for (let index = left; index < right; index++) {
      const heap1 = prefixScore[index + 1] - prefixScore[left];
      const heap2 = prefixScore[right + 1] - prefixScore[index + 1];

      if (heap1 > heap2) {
        const score = heap2 + getMaxScore(index + 1, right);

        result = Math.max(score, result);
      } else if (heap1 < heap2) {
        const score = heap1 + getMaxScore(left, index);

        result = Math.max(score, result);
      } else {
        const score1 = heap2 + getMaxScore(index + 1, right);
        const score2 = heap1 + getMaxScore(left, index);

        result = Math.max(result, score1, score2);
      }
    }

    dp[left][right] = result;

    return result;
  }
};
