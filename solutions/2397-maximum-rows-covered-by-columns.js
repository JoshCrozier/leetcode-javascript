/**
 * 2397. Maximum Rows Covered by Columns
 * https://leetcode.com/problems/maximum-rows-covered-by-columns/
 * Difficulty: Medium
 *
 * You are given an m x n binary matrix matrix and an integer numSelect.
 *
 * Your goal is to select exactly numSelect distinct columns from matrix such that you cover
 * as many rows as possible.
 *
 * A row is considered covered if all the 1's in that row are also part of a column that you
 * have selected. If a row does not have any 1s, it is also considered covered.
 *
 * More formally, let us consider selected = {c1, c2, ...., cnumSelect} as the set of columns
 * selected by you. A row i is covered by selected if:
 * - For each cell where matrix[i][j] == 1, the column j is in selected.
 * - Or, no cell in row i has a value of 1.
 *
 * Return the maximum number of rows that can be covered by a set of numSelect columns.
 */

/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 */
var maximumRows = function(matrix, numSelect) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let result = 0;

  backtrack(0, 0, 0);

  return result;

  function countCovered(selected) {
    let covered = 0;
    for (let i = 0; i < rows; i++) {
      let isCovered = true;
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === 1 && !(selected & (1 << j))) {
          isCovered = false;
          break;
        }
      }
      if (isCovered) covered++;
    }
    return covered;
  }

  function backtrack(index, selected, count) {
    if (count === numSelect) {
      result = Math.max(result, countCovered(selected));
      return;
    }
    if (index >= cols || cols - index + count < numSelect) return;

    backtrack(index + 1, selected | (1 << index), count + 1);
    backtrack(index + 1, selected, count);
  }
};
