/**
 * 861. Score After Flipping Matrix
 * https://leetcode.com/problems/score-after-flipping-matrix/
 * Difficulty: Medium
 *
 * You are given an m x n binary matrix grid.
 *
 * A move consists of choosing any row or column and toggling each value in that row or
 * column (i.e., changing all 0's to 1's, and all 1's to 0's).
 *
 * Every row of the matrix is interpreted as a binary number, and the score of the matrix
 * is the sum of these numbers.
 *
 * Return the highest possible score after making any number of moves (including zero moves).
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    if (grid[row][0] === 0) {
      for (let col = 0; col < cols; col++) {
        grid[row][col] ^= 1;
      }
    }
  }

  let result = rows * (1 << (cols - 1));

  for (let col = 1; col < cols; col++) {
    let onesCount = 0;
    for (let row = 0; row < rows; row++) {
      onesCount += grid[row][col];
    }
    const maxOnes = Math.max(onesCount, rows - onesCount);
    result += maxOnes * (1 << (cols - 1 - col));
  }

  return result;
};
