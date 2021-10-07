/**
 * 1380. Lucky Numbers in a Matrix
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 * Difficulty: Easy
 *
 * Given an m x n matrix of distinct numbers, return all lucky numbers
 * in the matrix in any order.
 *
 * A lucky number is an element of the matrix such that it is the minimum
 * element in its row and maximum in its column.
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  const min = matrix.map(row => Math.min(...row));
  const max = matrix[0].map((_, i) => Math.max(...matrix.map(row => row[i])));

  return min.filter(value => max.includes(value));
};
