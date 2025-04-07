/**
 * 1254. Number of Closed Islands
 * https://leetcode.com/problems/number-of-closed-islands/
 * Difficulty: Medium
 *
 * Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally
 * connected group of 0s and a closed island is an island totally (all left, top, right, bottom)
 * surrounded by 1s.
 *
 * Return the number of closed islands.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    markBorderConnected(i, 0);
    markBorderConnected(i, cols - 1);
  }
  for (let j = 0; j < cols; j++) {
    markBorderConnected(0, j);
    markBorderConnected(rows - 1, j);
  }

  let result = 0;
  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      result += countClosed(i, j);
    }
  }

  return result;

  function markBorderConnected(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== 0) return;
    grid[row][col] = 1;
    markBorderConnected(row - 1, col);
    markBorderConnected(row + 1, col);
    markBorderConnected(row, col - 1);
    markBorderConnected(row, col + 1);
  }

  function countClosed(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== 0) return 0;
    grid[row][col] = 1;
    countClosed(row - 1, col);
    countClosed(row + 1, col);
    countClosed(row, col - 1);
    countClosed(row, col + 1);
    return 1;
  }
};
