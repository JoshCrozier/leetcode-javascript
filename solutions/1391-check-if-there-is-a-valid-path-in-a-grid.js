/**
 * 1391. Check if There is a Valid Path in a Grid
 * https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/
 * Difficulty: Medium
 *
 * You are given an m x n grid. Each cell of grid represents a street. The street of grid[i][j]
 * can be:
 * - 1 which means a street connecting the left cell and the right cell.
 * - 2 which means a street connecting the upper cell and the lower cell.
 * - 3 which means a street connecting the left cell and the lower cell.
 * - 4 which means a street connecting the right cell and the lower cell.
 * - 5 which means a street connecting the left cell and the upper cell.
 * - 6 which means a street connecting the right cell and the upper cell.
 *
 * You will initially start at the street of the upper-left cell (0, 0). A valid path in the
 * grid is a path that starts from the upper left cell (0, 0) and ends at the bottom-right
 * cell (m - 1, n - 1). The path should only follow the streets.
 *
 * Notice that you are not allowed to change any street.
 *
 * Return true if there is a valid path in the grid or false otherwise.
 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = {
    1: [[0, -1, [1, 4, 6]], [0, 1, [1, 3, 5]]],
    2: [[-1, 0, [2, 3, 4]], [1, 0, [2, 5, 6]]],
    3: [[0, -1, [1, 4, 6]], [1, 0, [2, 5, 6]]],
    4: [[0, 1, [1, 3, 5]], [1, 0, [2, 5, 6]]],
    5: [[0, -1, [1, 4, 6]], [-1, 0, [2, 3, 4]]],
    6: [[0, 1, [1, 3, 5]], [-1, 0, [2, 3, 4]]]
  };

  return explorePath(0, 0);

  function isValid(x, y) {
    return x >= 0 && x < rows && y >= 0 && y < cols;
  }

  function explorePath(x, y, visited = new Set()) {
    if (!isValid(x, y) || visited.has(`${x},${y}`)) return false;
    if (x === rows - 1 && y === cols - 1) return true;

    visited.add(`${x},${y}`);
    const street = grid[x][y];

    for (const [dx, dy, validStreets] of directions[street]) {
      const newX = x + dx;
      const newY = y + dy;
      if (isValid(newX, newY) && validStreets.includes(grid[newX][newY])) {
        if (explorePath(newX, newY, visited)) return true;
      }
    }

    return false;
  }
};
