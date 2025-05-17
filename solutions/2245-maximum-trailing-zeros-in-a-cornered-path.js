/**
 * 2245. Maximum Trailing Zeros in a Cornered Path
 * https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/
 * Difficulty: Medium
 *
 * You are given a 2D integer array grid of size m x n, where each cell contains a positive integer.
 *
 * A cornered path is defined as a set of adjacent cells with at most one turn. More specifically,
 * the path should exclusively move either horizontally or vertically up to the turn (if there is
 * one), without returning to a previously visited cell. After the turn, the path will then move
 * exclusively in the alternate direction: move vertically if it moved horizontally, and vice versa,
 * also without returning to a previously visited cell.
 *
 * The product of a path is defined as the product of all the values in the path.
 *
 * Return the maximum number of trailing zeros in the product of a cornered path found in grid.
 *
 * Note:
 * - Horizontal movement means moving in either the left or right direction.
 * - Vertical movement means moving in either the up or down direction.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxTrailingZeros = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  function countFactors(num) {
    let count2 = 0;
    let count5 = 0;

    while (num % 2 === 0) {
      count2++;
      num = Math.floor(num / 2);
    }

    while (num % 5 === 0) {
      count5++;
      num = Math.floor(num / 5);
    }

    return [count2, count5];
  }

  const factors = new Array(m).fill().map(() => new Array(n).fill().map(() => [0, 0]));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      factors[i][j] = countFactors(grid[i][j]);
    }
  }

  const rowPrefix = new Array(m).fill().map(() => new Array(n + 1).fill().map(() => [0, 0]));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowPrefix[i][j + 1][0] = rowPrefix[i][j][0] + factors[i][j][0];
      rowPrefix[i][j + 1][1] = rowPrefix[i][j][1] + factors[i][j][1];
    }
  }

  const colPrefix = new Array(m + 1).fill().map(() => new Array(n).fill().map(() => [0, 0]));
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      colPrefix[i + 1][j][0] = colPrefix[i][j][0] + factors[i][j][0];
      colPrefix[i + 1][j][1] = colPrefix[i][j][1] + factors[i][j][1];
    }
  }

  let maxZeros = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const [count2, count5] = factors[i][j];

      const leftUp = [
        rowPrefix[i][j][0] + colPrefix[i][j][0],
        rowPrefix[i][j][1] + colPrefix[i][j][1]
      ];

      const leftDown = [
        rowPrefix[i][j][0] + (colPrefix[m][j][0] - colPrefix[i + 1][j][0]),
        rowPrefix[i][j][1] + (colPrefix[m][j][1] - colPrefix[i + 1][j][1])
      ];

      const rightUp = [
        (rowPrefix[i][n][0] - rowPrefix[i][j + 1][0]) + colPrefix[i][j][0],
        (rowPrefix[i][n][1] - rowPrefix[i][j + 1][1]) + colPrefix[i][j][1]
      ];

      const rightDown = [
        (rowPrefix[i][n][0] - rowPrefix[i][j + 1][0])
          + (colPrefix[m][j][0] - colPrefix[i + 1][j][0]),
        (rowPrefix[i][n][1] - rowPrefix[i][j + 1][1])
          + (colPrefix[m][j][1] - colPrefix[i + 1][j][1])
      ];

      const paths = [
        [leftUp[0] + count2, leftUp[1] + count5],
        [leftDown[0] + count2, leftDown[1] + count5],
        [rightUp[0] + count2, rightUp[1] + count5],
        [rightDown[0] + count2, rightDown[1] + count5]
      ];

      for (const [path2, path5] of paths) {
        maxZeros = Math.max(maxZeros, Math.min(path2, path5));
      }
    }
  }

  return maxZeros;
};
