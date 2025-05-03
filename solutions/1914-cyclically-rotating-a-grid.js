/**
 * 1914. Cyclically Rotating a Grid
 * https://leetcode.com/problems/cyclically-rotating-a-grid/
 * Difficulty: Medium
 *
 * You are given an m x n integer matrix grid, where m and n are both even integers, and
 * an integer k.
 *
 * The matrix is composed of several layers, which is shown in the below image, where each
 * color is its own layer.
 *
 * A cyclic rotation of the matrix is done by cyclically rotating each layer in the matrix.
 * To cyclically rotate a layer once, each element in the layer will take the place of the
 * adjacent element in the counter-clockwise direction. An example rotation is shown below.
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const result = grid.map(row => [...row]);

  for (let layer = 0; layer < Math.min(rows, cols) / 2; layer++) {
    rotateLayer(layer, layer, rows - 1 - layer, cols - 1 - layer, k);
  }

  return result;

  function rotateLayer(top, left, bottom, right, rotations) {
    if (top >= bottom || left >= right) return;

    const perimeter = 2 * (bottom - top + right - left);
    const effectiveRotations = rotations % perimeter;
    if (effectiveRotations === 0) return;

    const elements = [];
    for (let i = top; i <= bottom; i++) elements.push(grid[i][left]);
    for (let j = left + 1; j <= right; j++) elements.push(grid[bottom][j]);
    for (let i = bottom - 1; i >= top; i--) elements.push(grid[i][right]);
    for (let j = right - 1; j > left; j--) elements.push(grid[top][j]);

    const offset = (perimeter - effectiveRotations) % perimeter;
    let index = offset;

    for (let i = top; i <= bottom; i++) {
      result[i][left] = elements[index % perimeter];
      index++;
    }
    for (let j = left + 1; j <= right; j++) {
      result[bottom][j] = elements[index % perimeter];
      index++;
    }
    for (let i = bottom - 1; i >= top; i--) {
      result[i][right] = elements[index % perimeter];
      index++;
    }
    for (let j = right - 1; j > left; j--) {
      result[top][j] = elements[index % perimeter];
      index++;
    }
  }
};
