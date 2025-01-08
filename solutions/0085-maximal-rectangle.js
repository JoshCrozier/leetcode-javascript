/**
 * 85. Maximal Rectangle
 * https://leetcode.com/problems/maximal-rectangle/
 * Difficulty: Hard
 *
 * Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle
 * containing only 1's and return its area.
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (!matrix?.length) return 0;
  let maxArea = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '1') {
        let minWidth = matrix[0].length;

        for (let k = i; k < matrix.length && matrix[k][j] === '1'; k++) {
          let width = 0;

          while (width < minWidth && j + width < matrix[0].length && matrix[k][j + width] === '1') {
            width++;
          }

          minWidth = Math.min(minWidth, width);
          maxArea = Math.max(maxArea, minWidth * (k - i + 1));
        }
      }
    }
  }

  return maxArea;
};
