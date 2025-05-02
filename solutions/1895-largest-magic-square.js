/**
 * 1895. Largest Magic Square
 * https://leetcode.com/problems/largest-magic-square/
 * Difficulty: Medium
 *
 * A k x k magic square is a k x k grid filled with integers such that every row sum, every
 * column sum, and both diagonal sums are all equal. The integers in the magic square do not
 * have to be distinct. Every 1 x 1 grid is trivially a magic square.
 *
 * Given an m x n integer grid, return the size (i.e., the side length k) of the largest magic
 * square that can be found within this grid.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const rowSums = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
  const colSums = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      rowSums[i][j] = rowSums[i][j - 1] + grid[i - 1][j - 1];
      colSums[i][j] = colSums[i - 1][j] + grid[i - 1][j - 1];
    }
  }

  const maxSize = 1;
  for (let size = Math.min(rows, cols); size >= 2; size--) {
    for (let i = size; i <= rows; i++) {
      for (let j = size; j <= cols; j++) {
        const rowSum = rowSums[i][j] - rowSums[i][j - size];
        let isMagic = true;

        for (let k = 1; k < size; k++) {
          if (rowSums[i - k][j] - rowSums[i - k][j - size] !== rowSum) {
            isMagic = false;
            break;
          }
        }

        if (!isMagic) continue;

        for (let k = 0; k < size; k++) {
          if (colSums[i][j - k] - colSums[i - size][j - k] !== rowSum) {
            isMagic = false;
            break;
          }
        }

        if (!isMagic) continue;

        let diagSum1 = 0;
        let diagSum2 = 0;
        for (let k = 0; k < size; k++) {
          diagSum1 += grid[i - size + k][j - size + k];
          diagSum2 += grid[i - size + k][j - 1 - k];
        }

        if (diagSum1 === rowSum && diagSum2 === rowSum) {
          return size;
        }
      }
    }
  }

  return maxSize;
};
