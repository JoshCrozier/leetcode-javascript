/**
 * 3197. Find the Minimum Area to Cover All Ones II
 * https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-ii/
 * Difficulty: Hard
 *
 * You are given a 2D binary array grid. You need to find 3 non-overlapping rectangles having
 * non-zero areas with horizontal and vertical sides such that all the 1's in grid lie inside
 * these rectangles.
 *
 * Return the minimum possible sum of the area of these rectangles.
 *
 * Note that the rectangles are allowed to touch.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumSum = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let minSum = Infinity;

  for (let i = 0; i < rows; i++) {
    const area1 = calculateArea(0, i, 0, cols - 1);
    for (let j = 0; j < cols; j++) {
      const area2 = calculateArea(i + 1, rows - 1, 0, j);
      const area3 = calculateArea(i + 1, rows - 1, j + 1, cols - 1);
      minSum = Math.min(minSum, area1 + area2 + area3);
    }
  }

  for (let j = 0; j < cols; j++) {
    const area1 = calculateArea(0, rows - 1, 0, j);
    for (let i = 0; i < rows; i++) {
      const area2 = calculateArea(0, i, j + 1, cols - 1);
      const area3 = calculateArea(i + 1, rows - 1, j + 1, cols - 1);
      minSum = Math.min(minSum, area1 + area2 + area3);
    }
  }

  for (let j = cols - 1; j >= 0; j--) {
    const area1 = calculateArea(0, rows - 1, j + 1, cols - 1);
    for (let i = 0; i < rows; i++) {
      const area2 = calculateArea(0, i, 0, j);
      const area3 = calculateArea(i + 1, rows - 1, 0, j);
      minSum = Math.min(minSum, area1 + area2 + area3);
    }
  }

  for (let i = rows - 1; i >= 0; i--) {
    const area1 = calculateArea(i + 1, rows - 1, 0, cols - 1);
    for (let j = 0; j < cols; j++) {
      const area2 = calculateArea(0, i, 0, j);
      const area3 = calculateArea(0, i, j + 1, cols - 1);
      minSum = Math.min(minSum, area1 + area2 + area3);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = i + 1; j < rows; j++) {
      const area1 = calculateArea(0, i, 0, cols - 1);
      const area2 = calculateArea(i + 1, j, 0, cols - 1);
      const area3 = calculateArea(j + 1, rows - 1, 0, cols - 1);
      minSum = Math.min(minSum, area1 + area2 + area3);
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = i + 1; j < cols; j++) {
      const area1 = calculateArea(0, rows - 1, 0, i);
      const area2 = calculateArea(0, rows - 1, i + 1, j);
      const area3 = calculateArea(0, rows - 1, j + 1, cols - 1);
      minSum = Math.min(minSum, area1 + area2 + area3);
    }
  }

  return minSum;

  function calculateArea(startRow, endRow, startCol, endCol) {
    let minRow = Infinity;
    let maxRow = -1;
    let minCol = Infinity;
    let maxCol = -1;
    let found = false;

    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCol; j <= endCol; j++) {
        if (grid[i][j] === 1) {
          minRow = Math.min(minRow, i);
          maxRow = Math.max(maxRow, i);
          minCol = Math.min(minCol, j);
          maxCol = Math.max(maxCol, j);
          found = true;
        }
      }
    }

    return found ? (maxRow - minRow + 1) * (maxCol - minCol + 1) : 0;
  }
};
