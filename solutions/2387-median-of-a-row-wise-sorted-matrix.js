/**
 * 2387. Median of a Row Wise Sorted Matrix
 * https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/
 * Difficulty: Medium
 *
 * Given an m x n matrix grid containing an odd number of integers where each row is sorted
 * in non-decreasing order, return the median of the matrix.
 *
 * You must solve the problem in less than O(m * n) time complexity.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixMedian = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const totalElements = rows * cols;
  const targetPosition = Math.floor(totalElements / 2) + 1;
  let low = 0;
  let high = 1000001;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (helper(mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return high;

  function helper(target) {
    let count = 0;
    for (const row of grid) {
      let left = 0;
      let right = cols;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (row[mid] <= target) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      count += left;
    }
    return count >= targetPosition;
  }
};
