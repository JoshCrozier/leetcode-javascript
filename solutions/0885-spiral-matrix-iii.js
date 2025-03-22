/**
 * 885. Spiral Matrix III
 * https://leetcode.com/problems/spiral-matrix-iii/
 * Difficulty: Medium
 *
 * You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner
 * is at the first row and column in the grid, and the southeast corner is at the last row and
 * column.
 *
 * You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you
 * move outside the grid's boundary, we continue our walk outside the grid (but may return to the
 * grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.
 *
 * Return an array of coordinates representing the positions of the grid in the order you visited
 * them.
 */

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
  const result = [];
  const total = rows * cols;
  let row = rStart;
  let col = cStart;
  let step = 1;
  let direction = 0;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  result.push([row, col]);

  while (result.length < total) {
    for (let i = 0; i < 2; i++) {
      const [dr, dc] = directions[direction];
      for (let j = 0; j < step; j++) {
        row += dr;
        col += dc;
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
          result.push([row, col]);
        }
      }
      direction = (direction + 1) % 4;
    }
    step++;
  }

  return result;
};
