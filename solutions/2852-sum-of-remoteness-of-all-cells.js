/**
 * 2852. Sum of Remoteness of All Cells
 * https://leetcode.com/problems/sum-of-remoteness-of-all-cells/
 * Difficulty: Medium
 *
 * You are given a 0-indexed matrix grid of order n * n. Each cell in this matrix has a
 * value grid[i][j], which is either a positive integer or -1 representing a blocked cell.
 *
 * You can move from a non-blocked cell to any non-blocked cell that shares an edge.
 *
 * For any cell (i, j), we represent its remoteness as R[i][j] which is defined as the following:
 * - If the cell (i, j) is a non-blocked cell, R[i][j] is the sum of the values grid[x][y] such
 *   that there is no path from the non-blocked cell (x, y) to the cell (i, j).
 * - For blocked cells, R[i][j] == 0.
 *
 * Return the sum of R[i][j] over all cells.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var sumRemoteness = function(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      totalSum += Math.max(grid[i][j], 0);
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] > 0) {
        const [componentSum, componentCount] = dfs(i, j, grid);
        result += (totalSum - componentSum) * componentCount;
      }
    }
  }

  return result;

  function dfs(x, y, grid) {
    if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] < 0) {
      return [0, 0];
    }

    const cellValue = grid[x][y];
    grid[x][y] = -1;

    let componentSum = cellValue;
    let componentCount = 1;

    for (const [dx, dy] of directions) {
      const [sum, count] = dfs(x + dx, y + dy, grid);
      componentSum += sum;
      componentCount += count;
    }

    return [componentSum, componentCount];
  }
};
