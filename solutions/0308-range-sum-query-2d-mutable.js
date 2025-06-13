/**
 * 308. Range Sum Query 2D - Mutable
 * https://leetcode.com/problems/range-sum-query-2d-mutable/
 * Difficulty: Medium
 *
 * Given a 2D matrix matrix, handle multiple queries of the following types:
 * 1. Update the value of a cell in matrix.
 * 2. Calculate the sum of the elements of matrix inside the rectangle defined by its upper left
 *    corner (row1, col1) and lower right corner (row2, col2).
 *
 * Implement the NumMatrix class:
 * - NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
 * - void update(int row, int col, int val) Updates the value of matrix[row][col] to be val.
 * - int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of
 *   matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right
 *   corner (row2, col2).
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.rows = matrix.length;
  this.cols = matrix[0].length;
  this.matrix = matrix;
  this.tree = new Array(this.rows + 1).fill().map(() => new Array(this.cols + 1).fill(0));

  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.updateTree(i + 1, j + 1, matrix[i][j]);
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.updateTree = function(row, col, val) {
  while (row <= this.rows) {
    let c = col;
    while (c <= this.cols) {
      this.tree[row][c] += val;
      c += c & (-c);
    }
    row += row & (-row);
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
NumMatrix.prototype.getSum = function(row, col) {
  let sum = 0;
  while (row > 0) {
    let c = col;
    while (c > 0) {
      sum += this.tree[row][c];
      c -= c & (-c);
    }
    row -= row & (-row);
  }
  return sum;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
  const diff = val - this.matrix[row][col];
  this.matrix[row][col] = val;
  this.updateTree(row + 1, col + 1, diff);
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.getSum(row2 + 1, col2 + 1)
    - this.getSum(row2 + 1, col1)
    - this.getSum(row1, col2 + 1)
    + this.getSum(row1, col1);
};
