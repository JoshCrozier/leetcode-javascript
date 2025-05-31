/**
 * 2711. Difference of Number of Distinct Values on Diagonals
 * https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/
 * Difficulty: Medium
 *
 * Given a 2D grid of size m x n, you should find the matrix answer of size m x n.
 *
 * The cell answer[r][c] is calculated by looking at the diagonal values of the cell grid[r][c]:
 * - Let leftAbove[r][c] be the number of distinct values on the diagonal to the left and above
 *   the cell grid[r][c] not including the cell grid[r][c] itself.
 * - Let rightBelow[r][c] be the number of distinct values on the diagonal to the right and below
 *   the cell grid[r][c], not including the cell grid[r][c] itself.
 * - Then answer[r][c] = |leftAbove[r][c] - rightBelow[r][c]|.
 *
 * A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost
 * row or leftmost column and going in the bottom-right direction until the end of the matrix
 * is reached.
 *
 * - For example, in the below diagram the diagonal is highlighted using the cell with indices
 *   (2, 3) colored gray:
 *   - Red-colored cells are left and above the cell.
 *   - Blue-colored cells are right and below the cell.
 */

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const result = Array.from({ length: rows }, () => new Array(cols).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const leftAboveSet = new Set();
      let i = r - 1;
      let j = c - 1;
      while (i >= 0 && j >= 0) {
        leftAboveSet.add(grid[i--][j--]);
      }

      const rightBelowSet = new Set();
      i = r + 1;
      j = c + 1;
      while (i < rows && j < cols) {
        rightBelowSet.add(grid[i++][j++]);
      }

      result[r][c] = Math.abs(leftAboveSet.size - rightBelowSet.size);
    }
  }

  return result;
};
