/**
 * 531. Lonely Pixel I
 * https://leetcode.com/problems/lonely-pixel-i/
 * Difficulty: Medium
 *
 * Given an m x n picture consisting of black 'B' and white 'W' pixels, return the number of
 * black lonely pixels.
 *
 * A black lonely pixel is a character 'B' that located at a specific position where the same
 * row and same column don't have any other black pixels.
 */

/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
  const rows = picture.length;
  const cols = picture[0].length;
  const rowCounts = new Array(rows).fill(0);
  const colCounts = new Array(cols).fill(0);
  let result = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (picture[row][col] === 'B') {
        rowCounts[row]++;
        colCounts[col]++;
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (picture[row][col] === 'B' && rowCounts[row] === 1 && colCounts[col] === 1) {
        result++;
      }
    }
  }

  return result;
};
