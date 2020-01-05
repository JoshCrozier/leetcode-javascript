/**
 * 1252. Cells with Odd Values in a Matrix
 * https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
 * Difficulty: Easy
 *
 * Given `n` and `m` which are the dimensions of a matrix
 * initialized by zeros and given an array `indices`
 * where `indices[i] = [ri, ci]`.
 * For each pair of `[ri, ci]` you have to increment all
 * cells in row `ri` and column `ci` by 1.
 *
 * Return the number of cells with odd values in the
 * matrix after applying the increment to all `indices`.
 */

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  const matrix = new Array(n).fill().map(_ => new Array(m).fill(0));

  indices.forEach(indice => {
    const [row, column] = indice;
    matrix[row].forEach((value, index) => matrix[row][index] = value + 1);
    matrix.forEach(row => row[column] = row[column] + 1);
  });

  return matrix.reduce((count, row) => {
    return count + row.filter(value => value % 2 !== 0).length;
  }, 0);
};
