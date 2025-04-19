/**
 * 1559. Detect Cycles in 2D Grid
 * https://leetcode.com/problems/detect-cycles-in-2d-grid/
 * Difficulty: Medium
 *
 * Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle
 * consisting of the same value in grid.
 *
 * A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From
 * a given cell, you can move to one of the cells adjacent to it - in one of the four directions
 * (up, down, left, or right), if it has the same value of the current cell.
 *
 * Also, you cannot move to the cell that you visited in your last move. For example, the cycle
 * (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last
 * visited cell.
 *
 * Return true if any cycle of the same value exists in grid, otherwise, return false.
 */

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!visited.has(`${row},${col}`)) {
        if (explorePath(row, col, -1, -1, grid[row][col])) return true;
      }
    }
  }

  return false;

  function explorePath(row, col, prevRow, prevCol, char) {
    const key = `${row},${col}`;
    if (visited.has(key)) return true;
    visited.add(key);

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (newRow === prevRow && newCol === prevCol) continue;
      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) continue;
      if (grid[newRow][newCol] !== char) continue;

      if (explorePath(newRow, newCol, row, col, char)) return true;
    }

    return false;
  }
};
