/**
 * 1591. Strange Printer II
 * https://leetcode.com/problems/strange-printer-ii/
 * Difficulty: Hard
 *
 * There is a strange printer with the following two special requirements:
 * - On each turn, the printer will print a solid rectangular pattern of a single color on the
 *   grid. This will cover up the existing colors in the rectangle.
 * - Once the printer has used a color for the above operation, the same color cannot be used again.
 *
 * You are given a m x n matrix targetGrid, where targetGrid[row][col] is the color in the position
 * (row, col) of the grid.
 *
 * Return true if it is possible to print the matrix targetGrid, otherwise, return false.
 */

/**
 * @param {number[][]} targetGrid
 * @return {boolean}
 */
var isPrintable = function(targetGrid) {
  const rows = targetGrid.length;
  const cols = targetGrid[0].length;
  const colorBounds = new Map();

  for (let color = 1; color <= 60; color++) {
    let minRow = rows;
    let maxRow = -1;
    let minCol = cols;
    let maxCol = -1;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (targetGrid[r][c] === color) {
          minRow = Math.min(minRow, r);
          maxRow = Math.max(maxRow, r);
          minCol = Math.min(minCol, c);
          maxCol = Math.max(maxCol, c);
        }
      }
    }
    if (maxRow >= 0) {
      colorBounds.set(color, [minRow, maxRow, minCol, maxCol]);
    }
  }

  const dependencies = new Map();
  for (const [color, [minRow, maxRow, minCol, maxCol]] of colorBounds) {
    const deps = new Set();
    for (let r = minRow; r <= maxRow; r++) {
      for (let c = minCol; c <= maxCol; c++) {
        if (targetGrid[r][c] !== color) {
          deps.add(targetGrid[r][c]);
        }
      }
    }
    dependencies.set(color, deps);
  }

  const visited = new Set();
  const recStack = new Set();

  function hasCycle(color) {
    if (recStack.has(color)) return true;
    if (visited.has(color)) return false;

    visited.add(color);
    recStack.add(color);

    for (const dep of dependencies.get(color) || []) {
      if (hasCycle(dep)) return true;
    }

    recStack.delete(color);
    return false;
  }

  for (const color of colorBounds.keys()) {
    if (hasCycle(color)) return false;
  }

  return true;
};
