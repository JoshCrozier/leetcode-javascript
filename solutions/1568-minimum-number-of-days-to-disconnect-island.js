/**
 * 1568. Minimum Number of Days to Disconnect Island
 * https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/
 * Difficulty: Hard
 *
 * You are given an m x n binary grid grid where 1 represents land and 0 represents water. An
 * island is a maximal 4-directionally (horizontal or vertical) connected group of 1's.
 *
 * The grid is said to be connected if we have exactly one island, otherwise is said disconnected.
 *
 * In one day, we are allowed to change any single land cell (1) into a water cell (0).
 *
 * Return the minimum number of days to disconnect the grid.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (countIslands() !== 1) return 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        grid[r][c] = 0;
        if (countIslands() !== 1) return 1;
        grid[r][c] = 1;
      }
    }
  }

  return 2;

  function countIslands() {
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    let islands = 0;

    function dfs(row, col) {
      if (row < 0 || row >= rows || col < 0 || col >= cols
          || visited[row][col] || grid[row][col] === 0) {
        return;
      }
      visited[row][col] = true;
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1);
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 1 && !visited[r][c]) {
          islands++;
          dfs(r, c);
        }
      }
    }
    return islands;
  }
};
