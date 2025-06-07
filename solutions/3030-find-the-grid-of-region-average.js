/**
 * 3030. Find the Grid of Region Average
 * https://leetcode.com/problems/find-the-grid-of-region-average/
 * Difficulty: Medium
 *
 * You are given m x n grid image which represents a grayscale image, where image[i][j]
 * represents a pixel with intensity in the range [0..255]. You are also given a non-negative
 * integer threshold.
 *
 * Two pixels are adjacent if they share an edge.
 *
 * A region is a 3 x 3 subgrid where the absolute difference in intensity between any two
 * adjacent pixels is less than or equal to threshold.
 *
 * All pixels in a region belong to that region, note that a pixel can belong to multiple regions.
 *
 * You need to calculate a m x n grid result, where result[i][j] is the average intensity of the
 * regions to which image[i][j] belongs, rounded down to the nearest integer. If image[i][j]
 * belongs to multiple regions, result[i][j] is the average of the rounded-down average intensities
 * of these regions, rounded down to the nearest integer. If image[i][j] does not belong to any
 * region, result[i][j] is equal to image[i][j].
 *
 * Return the grid result.
 */

/**
 * @param {number[][]} image
 * @param {number} threshold
 * @return {number[][]}
 */
var resultGrid = function(image, threshold) {
  const rows = image.length;
  const cols = image[0].length;
  const result = Array.from({ length: rows }, () => new Array(cols).fill(0));
  const regionCount = Array.from({ length: rows }, () => new Array(cols).fill(0));

  for (let i = 0; i <= rows - 3; i++) {
    for (let j = 0; j <= cols - 3; j++) {
      if (isValidRegion(i, j)) {
        const regionAvg = calculateRegionAverage(i, j);

        for (let r = i; r < i + 3; r++) {
          for (let c = j; c < j + 3; c++) {
            result[r][c] += regionAvg;
            regionCount[r][c]++;
          }
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (regionCount[i][j] === 0) {
        result[i][j] = image[i][j];
      } else {
        result[i][j] = Math.floor(result[i][j] / regionCount[i][j]);
      }
    }
  }

  return result;

  function calculateRegionAverage(startRow, startCol) {
    let sum = 0;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        sum += image[i][j];
      }
    }
    return Math.floor(sum / 9);
  }

  function isValidRegion(startRow, startCol) {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        for (const [dr, dc] of directions) {
          const newRow = i + dr;
          const newCol = j + dc;

          if (newRow >= startRow && newRow < startRow + 3
              && newCol >= startCol && newCol < startCol + 3) {
            if (Math.abs(image[i][j] - image[newRow][newCol]) > threshold) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
};
