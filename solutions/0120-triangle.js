/**
 * 120. Triangle
 * https://leetcode.com/problems/triangle/
 * Difficulty: Medium
 *
 * Given a triangle array, return the minimum path sum from top to bottom.
 *
 * For each step, you may move to an adjacent number of the row below. More
 * formally, if you are on index i on the current row, you may move to either
 * index i or index i + 1 on the next row.
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for (let i = triangle.length - 2; i > -1; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min( triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0];
};
