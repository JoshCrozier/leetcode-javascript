/**
 * 542. 01 Matrix
 * https://leetcode.com/problems/01-matrix/
 * Difficulty: Medium
 *
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 *
 * The distance between two adjacent cells is 1.
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const queue = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j, 0]);
      } else {
        matrix[i][j] = Infinity;
      }
    }
  }


  while (queue.length) {
    const [i, j, k] = queue.shift();
    if (matrix[i][j] > k) {
      matrix[i][j] = k;
    }
    [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(p => {
      const [x, y, z] = [i + p[0], j + p[1], k + 1];
      if (x > -1 && x < matrix.length && y > -1 && y < matrix[0].length) {
        if (matrix[x][y] === Infinity) {
          queue.push([x, y, z]);
        }
      }
    });
  }

  return matrix;
};
