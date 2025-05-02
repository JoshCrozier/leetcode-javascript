/**
 * 1901. Find a Peak Element II
 * https://leetcode.com/problems/find-a-peak-element-ii/
 * Difficulty: Medium
 *
 * A peak element in a 2D grid is an element that is strictly greater than all of its adjacent
 * neighbors to the left, right, top, and bottom.
 *
 * Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element
 * mat[i][j] and return the length 2 array [i,j].
 *
 * You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in
 * each cell.
 *
 * You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  return binarySearch(0, rows - 1);

  function getMaxIndexInRow(row, left, right) {
    let maxIndex = left;
    for (let i = left; i <= right; i++) {
      if (mat[row][i] > mat[row][maxIndex]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  }

  function binarySearch(startRow, endRow) {
    if (startRow > endRow) return null;

    const midRow = Math.floor((startRow + endRow) / 2);
    const maxCol = getMaxIndexInRow(midRow, 0, cols - 1);
    const maxValue = mat[midRow][maxCol];

    const topValue = midRow > 0 ? mat[midRow - 1][maxCol] : -1;
    const bottomValue = midRow < rows - 1 ? mat[midRow + 1][maxCol] : -1;
    const leftValue = maxCol > 0 ? mat[midRow][maxCol - 1] : -1;
    const rightValue = maxCol < cols - 1 ? mat[midRow][maxCol + 1] : -1;

    if (maxValue > topValue && maxValue > bottomValue
        && maxValue > leftValue && maxValue > rightValue) {
      return [midRow, maxCol];
    }

    if (midRow > 0 && topValue > maxValue) {
      return binarySearch(startRow, midRow - 1);
    }

    return binarySearch(midRow + 1, endRow);
  }
};
