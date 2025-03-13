/**
 * 764. Largest Plus Sign
 * https://leetcode.com/problems/largest-plus-sign/
 * Difficulty: Medium
 *
 * You are given an integer n. You have an n x n binary grid grid with all values initially
 * 1's except for some indices given in the array mines. The ith element of the array mines
 * is defined as mines[i] = [xi, yi] where grid[xi][yi] == 0.
 *
 * Return the order of the largest axis-aligned plus sign of 1's contained in grid. If
 * there is none, return 0.
 *
 * An axis-aligned plus sign of 1's of order k has some center grid[r][c] == 1 along with four
 * arms of length k - 1 going up, down, left, and right, and made of 1's. Note that there could
 * be 0's or 1's beyond the arms of the plus sign, only the relevant area of the plus sign is
 * checked for 1's.
 */

/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
function orderOfLargestPlusSign(n, mines) {
  const grid = Array(n).fill().map(() => Array(n).fill(1));
  mines.forEach(([x, y]) => grid[x][y] = 0);

  const left = Array(n).fill().map(() => Array(n).fill(0));
  const right = Array(n).fill().map(() => Array(n).fill(0));
  const up = Array(n).fill().map(() => Array(n).fill(0));
  const down = Array(n).fill().map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      left[i][j] = grid[i][j] ? (j > 0 ? left[i][j-1] + 1 : 1) : 0;
      up[i][j] = grid[i][j] ? (i > 0 ? up[i-1][j] + 1 : 1) : 0;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      right[i][j] = grid[i][j] ? (j < n-1 ? right[i][j+1] + 1 : 1) : 0;
      down[i][j] = grid[i][j] ? (i < n-1 ? down[i+1][j] + 1 : 1) : 0;
    }
  }

  let maxOrder = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      maxOrder = Math.max(
        maxOrder,
        Math.min(left[i][j], right[i][j], up[i][j], down[i][j])
      );
    }
  }

  return maxOrder;
}
