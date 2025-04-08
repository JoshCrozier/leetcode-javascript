/**
 * 1289. Minimum Falling Path Sum II
 * https://leetcode.com/problems/minimum-falling-path-sum-ii/
 * Difficulty: Hard
 *
 * Given an n x n integer matrix grid, return the minimum sum of a falling path with non-zero
 * shifts.
 *
 * A falling path with non-zero shifts is a choice of exactly one element from each row of grid
 * such that no two elements chosen in adjacent rows are in the same column.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
  const n = grid.length;
  let prevRow = [...grid[0]];

  for (let row = 1; row < n; row++) {
    const currRow = new Array(n);
    for (let col = 0; col < n; col++) {
      let minPrev = Infinity;
      for (let prevCol = 0; prevCol < n; prevCol++) {
        if (prevCol !== col) {
          minPrev = Math.min(minPrev, prevRow[prevCol]);
        }
      }
      currRow[col] = grid[row][col] + minPrev;
    }
    prevRow = currRow;
  }

  return Math.min(...prevRow);
};
