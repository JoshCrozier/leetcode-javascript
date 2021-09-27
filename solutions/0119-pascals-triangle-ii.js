/**
 * 119. Pascal's Triangle II
 * https://leetcode.com/problems/pascals-triangle-ii/
 * Difficulty: Easy
 *
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of
 * the Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers
 * directly above it as shown:
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  return generateTriangle(rowIndex + 1)[rowIndex];
};

function generateTriangle(numRows) {
  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    result[i] = [1];
    result[i - 1].forEach((value, j, prev) => {
      result[i][j + 1] = (prev[j + 1] + value) || 1;
    });
  }

  return result;
};
