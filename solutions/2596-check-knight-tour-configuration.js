/**
 * 2596. Check Knight Tour Configuration
 * https://leetcode.com/problems/check-knight-tour-configuration/
 * Difficulty: Medium
 *
 * There is a knight on an n x n chessboard. In a valid configuration, the knight starts at the
 * top-left cell of the board and visits every cell on the board exactly once.
 *
 * You are given an n x n integer matrix grid consisting of distinct integers from the range
 * [0, n * n - 1] where grid[row][col] indicates that the cell (row, col) is the grid[row][col]th
 * cell that the knight visited. The moves are 0-indexed.
 *
 * Return true if grid represents a valid configuration of the knight's movements or false
 * otherwise.
 *
 * Note that a valid knight move consists of moving two squares vertically and one square
 * horizontally, or two squares horizontally and one square vertically. The figure below
 * illustrates all the possible eight moves of a knight from some cell.
 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function(grid) {
  const n = grid.length;
  const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];

  if (grid[0][0] !== 0) return false;

  const isValidMove = (fromRow, fromCol, toRow, toCol) => {
    for (const [dr, dc] of moves) {
      if (fromRow + dr === toRow && fromCol + dc === toCol) return true;
    }
    return false;
  };

  const positions = new Array(n * n).fill(0).map(() => [0, 0]);
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      positions[grid[row][col]] = [row, col];
    }
  }

  for (let i = 1; i < n * n; i++) {
    const [prevRow, prevCol] = positions[i - 1];
    const [currRow, currCol] = positions[i];
    if (!isValidMove(prevRow, prevCol, currRow, currCol)) return false;
  }

  return true;
};
