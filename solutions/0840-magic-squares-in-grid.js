/**
 * 840. Magic Squares In Grid
 * https://leetcode.com/problems/magic-squares-in-grid/
 * Difficulty: Medium
 *
 * A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row,
 * column, and both diagonals all have the same sum.
 *
 * Given a row x col grid of integers, how many 3 x 3 magic square subgrids are there?
 *
 * Note: while a magic square can only contain numbers from 1 to 9, grid may contain numbers up
 * to 15.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (rows < 3 || cols < 3) return 0;

  let result = 0;
  for (let r = 0; r <= rows - 3; r++) {
    for (let c = 0; c <= cols - 3; c++) {
      if (isMagicSquare(grid, r, c)) result++;
    }
  }

  return result;
};

function isMagicSquare(grid, r, c) {
  if (grid[r + 1][c + 1] !== 5) return false;

  const cells = [
    grid[r][c], grid[r][c + 1], grid[r][c + 2],
    grid[r + 1][c], grid[r + 1][c + 1], grid[r + 1][c + 2],
    grid[r + 2][c], grid[r + 2][c + 1], grid[r + 2][c + 2]
  ];

  if (!cells.every(val => val >= 1 && val <= 9) || new Set(cells).size !== 9) return false;

  return (
    grid[r][c] + grid[r][c + 1] + grid[r][c + 2] === 15
    && grid[r + 1][c] + grid[r + 1][c + 1] + grid[r + 1][c + 2] === 15
    && grid[r + 2][c] + grid[r + 2][c + 1] + grid[r + 2][c + 2] === 15
    && grid[r][c] + grid[r + 1][c] + grid[r + 2][c] === 15
    && grid[r][c + 1] + grid[r + 1][c + 1] + grid[r + 2][c + 1] === 15
    && grid[r][c + 2] + grid[r + 1][c + 2] + grid[r + 2][c + 2] === 15
    && grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] === 15
    && grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] === 15
  );
}
