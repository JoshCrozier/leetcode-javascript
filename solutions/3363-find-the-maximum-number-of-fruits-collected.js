/**
 * 3363. Find the Maximum Number of Fruits Collected
 * https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/
 * Difficulty: Hard
 *
 * There is a game dungeon comprised of n x n rooms arranged in a grid.
 *
 * You are given a 2D array fruits of size n x n, where fruits[i][j] represents the number of fruits
 * in the room (i, j). Three children will play in the game dungeon, with initial positions at the
 * corner rooms (0, 0), (0, n - 1), and (n - 1, 0).
 *
 * The children will make exactly n - 1 moves according to the following rules to reach the
 * room (n - 1, n - 1):
 * - The child starting from (0, 0) must move from their current room (i, j) to one of the rooms
 *   (i + 1, j + 1), (i + 1, j), and (i, j + 1) if the target room exists.
 * - The child starting from (0, n - 1) must move from their current room (i, j) to one of the rooms
 *   (i + 1, j - 1), (i + 1, j), and (i + 1, j + 1) if the target room exists.
 * - The child starting from (n - 1, 0) must move from their current room (i, j) to one of the rooms
 *   (i - 1, j + 1), (i, j + 1), and (i + 1, j + 1) if the target room exists.
 *
 * When a child enters a room, they will collect all the fruits there. If two or more children
 * enter the same room, only one child will collect the fruits, and the room will be emptied after
 * they leave.
 *
 * Return the maximum number of fruits the children can collect from the dungeon.
 */

/**
 * @param {number[][]} fruits
 * @return {number}
 */
var maxCollectedFruits = function(fruits) {
  const n = fruits.length;
  const dp = Array(n).fill().map(() => Array(n).fill(-1));
  const dp2 = Array(n).fill().map(() => Array(n).fill(-1));

  let diagonalSum = 0;
  for (let i = 0; i < n; i++) {
    diagonalSum += fruits[i][i];
  }

  const child2Max = solveChild2(0, n - 1);
  const child3Max = solveChild3(n - 1, 0);

  return diagonalSum + child2Max + child3Max;

  function solveChild2(row, col) {
    if (row === n - 1 && col === n - 1) return 0;
    if (row >= n || col < 0 || col >= n || row > col + 1) return -Infinity;
    if (dp[row][col] !== -1) return dp[row][col];

    const value = (row === col) ? 0 : fruits[row][col];
    let maxNext = -Infinity;

    for (const [dr, dc] of [[1, -1], [1, 0], [1, 1]]) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow < n && newCol >= 0 && newCol < n) {
        maxNext = Math.max(maxNext, solveChild2(newRow, newCol));
      }
    }

    return dp[row][col] = value + maxNext;
  }

  function solveChild3(row, col) {
    if (row === n - 1 && col === n - 1) return 0;
    if (row < 0 || row >= n || col >= n || row + col < n - 1) return -Infinity;
    if (dp2[row][col] !== -1) return dp2[row][col];

    const value = (row === col) ? 0 : fruits[row][col];
    let maxNext = -Infinity;

    for (const [dr, dc] of [[-1, 1], [0, 1], [1, 1]]) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow >= 0 && newRow < n && newCol < n) {
        maxNext = Math.max(maxNext, solveChild3(newRow, newCol));
      }
    }

    return dp2[row][col] = value + maxNext;
  }
};
