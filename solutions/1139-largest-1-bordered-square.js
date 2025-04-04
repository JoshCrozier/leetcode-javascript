/**
 * 1139. Largest 1-Bordered Square
 * https://leetcode.com/problems/largest-1-bordered-square/
 * Difficulty: Medium
 *
 * Given a 2D grid of 0s and 1s, return the number of elements in the largest square subgrid
 * that has all 1s on its border, or 0 if such a subgrid doesn't exist in the grid.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const left = Array(rows).fill().map(() => Array(cols).fill(0));
  const top = Array(rows).fill().map(() => Array(cols).fill(0));
  let maxSide = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j]) {
        left[i][j] = j > 0 ? left[i][j - 1] + 1 : 1;
        top[i][j] = i > 0 ? top[i - 1][j] + 1 : 1;

        let side = Math.min(left[i][j], top[i][j]);
        while (side > maxSide) {
          if (left[i - side + 1][j] >= side && top[i][j - side + 1] >= side) {
            maxSide = side;
            break;
          }
          side--;
        }
      }
    }
  }

  return maxSide * maxSide;
};
