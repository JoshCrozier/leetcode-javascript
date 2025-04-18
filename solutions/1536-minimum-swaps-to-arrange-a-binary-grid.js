/**
 * 1536. Minimum Swaps to Arrange a Binary Grid
 * https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/
 * Difficulty: Medium
 *
 * Given an n x n binary grid, in one step you can choose two adjacent rows of the grid and
 * swap them.
 *
 * A grid is said to be valid if all the cells above the main diagonal are zeros.
 *
 * Return the minimum number of steps needed to make the grid valid, or -1 if the grid cannot
 * be valid.
 *
 * The main diagonal of a grid is the diagonal that starts at cell (1, 1) and ends at cell (n, n).
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
  const n = grid.length;
  const trailingZeros = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    trailingZeros[i] = countTrailingZeros(i);
  }

  let swaps = 0;
  for (let i = 0; i < n - 1; i++) {
    const requiredZeros = n - i - 1;
    let found = false;

    for (let j = i; j < n; j++) {
      if (trailingZeros[j] >= requiredZeros) {
        found = true;
        for (let k = j; k > i; k--) {
          [trailingZeros[k], trailingZeros[k - 1]] = [trailingZeros[k - 1], trailingZeros[k]];
          swaps++;
        }
        break;
      }
    }

    if (!found) return -1;
  }

  return swaps;

  function countTrailingZeros(row) {
    let count = 0;
    for (let j = n - 1; j >= 0; j--) {
      if (grid[row][j] === 0) count++;
      else break;
    }
    return count;
  }
};
