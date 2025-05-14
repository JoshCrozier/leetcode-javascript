/**
 * 2132. Stamping the Grid
 * https://leetcode.com/problems/stamping-the-grid/
 * Difficulty: Hard
 *
 * You are given an m x n binary matrix grid where each cell is either 0 (empty) or 1 (occupied).
 *
 * You are then given stamps of size stampHeight x stampWidth. We want to fit the stamps such that
 * they follow the given restrictions and requirements:
 * 1. Cover all the empty cells.
 * 2. Do not cover any of the occupied cells.
 * 3. We can put as many stamps as we want.
 * 4. Stamps can overlap with each other.
 * 5. Stamps are not allowed to be rotated.
 * 6. Stamps must stay completely inside the grid.
 *
 * Return true if it is possible to fit the stamps while following the given restrictions and
 * requirements. Otherwise, return false.
 */

/**
 * @param {number[][]} grid
 * @param {number} stampHeight
 * @param {number} stampWidth
 * @return {boolean}
 */
var possibleToStamp = function(grid, stampHeight, stampWidth) {
  const rows = grid.length;
  const cols = grid[0].length;
  const prefixSum = new Array(rows + 1).fill().map(() => new Array(cols + 1).fill(0));
  const diff = new Array(rows + 1).fill().map(() => new Array(cols + 1).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      prefixSum[i + 1][j + 1] = prefixSum[i + 1][j] + prefixSum[i][j + 1]
        - prefixSum[i][j] + grid[i][j];
    }
  }

  for (let i = 0; i <= rows - stampHeight; i++) {
    for (let j = 0; j <= cols - stampWidth; j++) {
      const x = i + stampHeight;
      const y = j + stampWidth;
      if (prefixSum[x][y] - prefixSum[x][j] - prefixSum[i][y] + prefixSum[i][j] === 0) {
        diff[i][j]++;
        diff[i][y]--;
        diff[x][j]--;
        diff[x][y]++;
      }
    }
  }

  const covered = new Array(rows).fill().map(() => new Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      covered[i][j] = (i > 0 ? covered[i - 1][j] : 0)
        + (j > 0 ? covered[i][j - 1] : 0)
        - (i > 0 && j > 0 ? covered[i - 1][j - 1] : 0) + diff[i][j];
      if (grid[i][j] === 0 && covered[i][j] === 0) return false;
    }
  }

  return true;
};
