/**
 * 174. Dungeon Game
 * https://leetcode.com/problems/dungeon-game/
 * Difficulty: Hard
 *
 * The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon.
 * The dungeon consists of m x n rooms laid out in a 2D grid. Our valiant knight was initially
 * positioned in the top-left room and must fight his way through dungeon to rescue the princess.
 *
 * The knight has an initial health point represented by a positive integer. If at any point his
 * health point drops to 0 or below, he dies immediately.
 *
 * Some of the rooms are guarded by demons (represented by negative integers), so the knight loses
 * health upon entering these rooms; other rooms are either empty (represented as 0) or contain
 * magic orbs that increase the knight's health (represented by positive integers).
 *
 * To reach the princess as quickly as possible, the knight decides to move only rightward or
 * downward in each step.
 *
 * Return the knight's minimum initial health so that he can rescue the princess.
 *
 * Note that any room can contain threats or power-ups, even the first room the knight enters and
 * the bottom-right room where the princess is imprisoned.
 */

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const dp = new Array(dungeon.length).fill(0).map(() => new Array(dungeon[0].length).fill(0));
  return traverse(dungeon, dungeon.length, dungeon[0].length, 0, 0, dp);
};

function traverse(dungeon, i, j, row, col, dp) {
  if (row === i - 1 && col === j - 1) {
    return Math.max(1, 1 - dungeon[row][col]);
  } else if (row >= i || col >= j) {
    return Infinity;
  } else if (dp[row][col]) {
    return dp[row][col];
  }
  const right = traverse(dungeon, i, j, row, col + 1, dp);
  const down = traverse(dungeon, i, j, row + 1, col, dp);
  dp[row][col] = Math.max(1, Math.min(right, down) - dungeon[row][col]);
  return dp[row][col];
};
