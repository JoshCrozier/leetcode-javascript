/**
 * 118. Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * Difficulty: Easy
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    result[i] = [1];
    result[i - 1].forEach((value, j, prev) => {
      result[i][j + 1] = (prev[j + 1] + value) || 1;
    });
  }

  return result;
};
