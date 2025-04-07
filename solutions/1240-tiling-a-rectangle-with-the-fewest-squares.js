/**
 * 1240. Tiling a Rectangle with the Fewest Squares
 * https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/
 * Difficulty: Hard
 *
 * Given a rectangle of size n x m, return the minimum number of integer-sided squares that
 * tile the rectangle.
 */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function tilingRectangle(n, m) {
  let result = n * m;
  const grid = new Array(n).fill().map(() => new Array(m).fill(false));
  explore(0);
  return result;

  function canPlaceSquare(row, col, size) {
    if (row + size > n || col + size > m) return false;
    for (let i = row; i < row + size; i++) {
      for (let j = col; j < col + size; j++) {
        if (grid[i][j]) return false;
      }
    }
    return true;
  }

  function fillSquare(row, col, size, value) {
    for (let i = row; i < row + size; i++) {
      for (let j = col; j < col + size; j++) {
        grid[i][j] = value;
      }
    }
  }

  function explore(count) {
    if (count >= result) return;
    let row = -1;
    let col = -1;
    for (let i = 0; i < n && row === -1; i++) {
      for (let j = 0; j < m; j++) {
        if (!grid[i][j]) {
          row = i;
          col = j;
          break;
        }
      }
    }
    if (row === -1) {
      result = Math.min(result, count);
      return;
    }
    for (let size = Math.min(n - row, m - col); size >= 1; size--) {
      if (canPlaceSquare(row, col, size)) {
        fillSquare(row, col, size, true);
        explore(count + 1);
        fillSquare(row, col, size, false);
      }
    }
  }
}
