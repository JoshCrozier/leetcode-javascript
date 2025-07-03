/**
 * 1428. Leftmost Column with at Least a One
 * https://leetcode.com/problems/leftmost-column-with-at-least-a-one/
 * Difficulty: Medium
 *
 * A row-sorted binary matrix means that all elements are 0 or 1 and each row of the matrix
 * is sorted in non-decreasing order.
 *
 * Given a row-sorted binary matrix binaryMatrix, return the index (0-indexed) of the leftmost
 * column with a 1 in it. If such an index does not exist, return -1.
 *
 * You can't access the Binary Matrix directly. You may only access the matrix using a
 * BinaryMatrix interface:
 * - BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
 * - BinaryMatrix.dimensions() returns the dimensions of the matrix as a list of 2
 *   elements [rows, cols], which means the matrix is rows x cols.
 *
 * Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.
 * Also, any solutions that attempt to circumvent the judge will result in disqualification.
 *
 * For custom testing purposes, the input will be the entire binary matrix mat. You will not
 * have access to the binary matrix directly.
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
  const [rows, cols] = binaryMatrix.dimensions();
  let result = -1;
  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (binaryMatrix.get(row, col) === 1) {
      result = col;
      col--;
    } else {
      row++;
    }
  }

  return result;
};
