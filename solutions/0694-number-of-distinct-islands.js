/**
 * 694. Number of Distinct Islands
 * https://leetcode.com/problems/number-of-distinct-islands/
 * Difficulty: Medium
 *
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land)
 * connected 4-directionally (horizontal or vertical.) You may assume all four edges of the
 * grid are surrounded by water.
 *
 * An island is considered to be the same as another if and only if one island can be translated
 * (and not rotated or reflected) to equal the other.
 *
 * Return the number of distinct islands.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const islandShapes = new Set();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        const shape = [];
        dfs(i, j, i, j, shape);
        islandShapes.add(shape.join('|'));
      }
    }
  }

  return islandShapes.size;

  function dfs(row, col, baseRow, baseCol, shape) {
    if (row < 0 || row >= rows || col < 0 || col >= cols
      || visited[row][col] || grid[row][col] === 0) {
      return;
    }

    visited[row][col] = true;
    shape.push(`${row - baseRow},${col - baseCol}`);

    dfs(row + 1, col, baseRow, baseCol, shape);
    dfs(row - 1, col, baseRow, baseCol, shape);
    dfs(row, col + 1, baseRow, baseCol, shape);
    dfs(row, col - 1, baseRow, baseCol, shape);
  }
};
