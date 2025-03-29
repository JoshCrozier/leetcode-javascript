/**
 * 980. Unique Paths III
 * https://leetcode.com/problems/unique-paths-iii/
 * Difficulty: Hard
 *
 * You are given an m x n integer array grid where grid[i][j] could be:
 * - 1 representing the starting square. There is exactly one starting square.
 * - 2 representing the ending square. There is exactly one ending square.
 * - 0 representing empty squares we can walk over.
 * - -1 representing obstacles that we cannot walk over.
 *
 * Return the number of 4-directional walks from the starting square to the ending
 * square, that walk over every non-obstacle square exactly once.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let emptySquares = 0;
  let startRow;
  let startCol;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) emptySquares++;
      if (grid[i][j] === 1) [startRow, startCol] = [i, j];
    }
  }

  function explorePaths(row, col, remaining) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] < 0) {
      return 0;
    }
    if (grid[row][col] === 2) {
      return remaining === 0 ? 1 : 0;
    }

    const current = grid[row][col];
    grid[row][col] = -1;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let pathCount = 0;

    for (const [dr, dc] of directions) {
      pathCount += explorePaths(row + dr, col + dc, remaining - 1);
    }

    grid[row][col] = current;
    return pathCount;
  }

  return explorePaths(startRow, startCol, emptySquares + 1);
};
