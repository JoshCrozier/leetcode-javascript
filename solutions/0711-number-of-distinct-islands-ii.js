/**
 * 711. Number of Distinct Islands II
 * https://leetcode.com/problems/number-of-distinct-islands-ii/
 * Difficulty: Hard
 *
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land)
 * connected 4-directionally (horizontal or vertical.) You may assume all four edges of the
 * grid are surrounded by water.
 *
 * An island is considered to be the same as another if they have the same shape, or have
 * the same shape after rotation (90, 180, or 270 degrees only) or reflection (left/right
 * direction or up/down direction).
 *
 * Return the number of distinct islands.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands2 = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const uniqueShapes = new Set();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        const cells = [];
        dfs(i, j, cells);
        const canonical = normalize(cells);
        uniqueShapes.add(canonical);
      }
    }
  }

  return uniqueShapes.size;

  function dfs(row, col, cells) {
    if (row < 0 || row >= rows || col < 0 || col >= cols
        || visited[row][col] || grid[row][col] === 0) {
      return;
    }

    visited[row][col] = true;
    cells.push([row, col]);

    dfs(row + 1, col, cells);
    dfs(row - 1, col, cells);
    dfs(row, col + 1, cells);
    dfs(row, col - 1, cells);
  }

  function normalize(cells) {
    const transformations = [
      (r, c) => [r, c],
      (r, c) => [r, -c],
      (r, c) => [-r, c],
      (r, c) => [-r, -c],
      (r, c) => [c, r],
      (r, c) => [c, -r],
      (r, c) => [-c, r],
      (r, c) => [-c, -r]
    ];

    const shapes = [];

    for (const transform of transformations) {
      const transformed = cells.map(([r, c]) => transform(r, c));
      transformed.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

      const minR = transformed[0][0];
      const minC = transformed[0][1];
      const normalized = transformed.map(([r, c]) => [r - minR, c - minC]);

      shapes.push(normalized.map(([r, c]) => `${r},${c}`).join('|'));
    }

    return shapes.sort()[0];
  }
};
