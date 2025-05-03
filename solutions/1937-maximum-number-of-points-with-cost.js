/**
 * 1937. Maximum Number of Points with Cost
 * https://leetcode.com/problems/maximum-number-of-points-with-cost/
 * Difficulty: Medium
 *
 * You are given an m x n integer matrix points (0-indexed). Starting with 0 points, you want
 * to maximize the number of points you can get from the matrix.
 *
 * To gain points, you must pick one cell in each row. Picking the cell at coordinates (r, c)
 * will add points[r][c] to your score.
 *
 * However, you will lose points if you pick a cell too far from the cell that you picked in
 * the previous row. For every two adjacent rows r and r + 1 (where 0 <= r < m - 1), picking
 * cells at coordinates (r, c1) and (r + 1, c2) will subtract abs(c1 - c2) from your score.
 *
 * Return the maximum number of points you can achieve.
 *
 * abs(x) is defined as:
 * - x for x >= 0.
 * - -x for x < 0.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  const rows = points.length;
  const cols = points[0].length;
  let prevRow = points[0].slice();

  for (let r = 1; r < rows; r++) {
    const currRow = new Array(cols).fill(0);
    const leftMax = new Array(cols).fill(0);
    const rightMax = new Array(cols).fill(0);

    leftMax[0] = prevRow[0];
    for (let c = 1; c < cols; c++) {
      leftMax[c] = Math.max(leftMax[c - 1] - 1, prevRow[c]);
    }

    rightMax[cols - 1] = prevRow[cols - 1];
    for (let c = cols - 2; c >= 0; c--) {
      rightMax[c] = Math.max(rightMax[c + 1] - 1, prevRow[c]);
    }

    for (let c = 0; c < cols; c++) {
      currRow[c] = points[r][c] + Math.max(leftMax[c], rightMax[c]);
    }

    prevRow = currRow;
  }

  return Math.max(...prevRow);
};
