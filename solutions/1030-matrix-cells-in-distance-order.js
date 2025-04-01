/**
 * 1030. Matrix Cells in Distance Order
 * https://leetcode.com/problems/matrix-cells-in-distance-order/
 * Difficulty: Easy
 *
 * You are given four integers row, cols, rCenter, and cCenter. There is a rows x cols matrix and
 * you are on the cell with the coordinates (rCenter, cCenter).
 *
 * Return the coordinates of all cells in the matrix, sorted by their distance from (rCenter,
 * cCenter) from the smallest distance to the largest distance. You may return the answer in any
 * order that satisfies this condition.
 *
 * The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 - c2|.
 */

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
  const result = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      result.push([row, col]);
    }
  }
  return result.sort((a, b) => {
    return Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter)
      - Math.abs(b[0] - rCenter) - Math.abs(b[1] - cCenter);
  });
};
