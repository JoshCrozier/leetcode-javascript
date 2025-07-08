/**
 * 2174. Remove All Ones With Row and Column Flips II
 * https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/
 * Difficulty: Medium
 *
 * You are given a 0-indexed m x n binary matrix grid.
 *
 * In one operation, you can choose any i and j that meet the following conditions:
 * - 0 <= i < m
 * - 0 <= j < n
 * - grid[i][j] == 1
 *
 * and change the values of all cells in row i and column j to zero.
 *
 * Return the minimum number of operations needed to remove all 1's from grid.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var removeOnes = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const map = new Map();

  return solve(grid);

  function solve(currentGrid) {
    const key = currentGrid.map(row => row.join('')).join('|');
    if (map.has(key)) return map.get(key);

    if (hasNoOnes(currentGrid)) return 0;

    let minOps = Infinity;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (currentGrid[i][j] === 1) {
          const newGrid = performOperation(currentGrid, i, j);
          minOps = Math.min(minOps, 1 + solve(newGrid));
        }
      }
    }

    map.set(key, minOps);
    return minOps;
  }

  function hasNoOnes(grid) {
    return grid.every(row => row.every(cell => cell === 0));
  }

  function performOperation(grid, targetRow, targetCol) {
    const newGrid = grid.map(row => [...row]);

    for (let j = 0; j < cols; j++) {
      newGrid[targetRow][j] = 0;
    }

    for (let i = 0; i < rows; i++) {
      newGrid[i][targetCol] = 0;
    }

    return newGrid;
  }
};
