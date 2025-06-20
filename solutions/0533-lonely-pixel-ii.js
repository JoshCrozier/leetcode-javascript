/**
 * 533. Lonely Pixel II
 * https://leetcode.com/problems/lonely-pixel-ii/
 * Difficulty: Medium
 *
 * Given an m x n picture consisting of black 'B' and white 'W' pixels and an integer target,
 * return the number of black lonely pixels.
 *
 * A black lonely pixel is a character 'B' that located at a specific position (r, c) where:
 * - Row r and column c both contain exactly target black pixels.
 * - For all rows that have a black pixel at column c, they should be exactly the same as row r.
 */

/**
 * @param {character[][]} picture
 * @param {number} target
 * @return {number}
 */
var findBlackPixel = function(picture, target) {
  const rows = picture.length;
  const cols = picture[0].length;
  const rowCounts = new Array(rows).fill(0);
  const colCounts = new Array(cols).fill(0);
  const rowPatterns = new Map();

  for (let row = 0; row < rows; row++) {
    let blackCount = 0;
    for (let col = 0; col < cols; col++) {
      if (picture[row][col] === 'B') {
        blackCount++;
        colCounts[col]++;
      }
    }
    rowCounts[row] = blackCount;
    if (blackCount === target) {
      const pattern = picture[row].join('');
      rowPatterns.set(pattern, (rowPatterns.get(pattern) || 0) + 1);
    }
  }

  let result = 0;
  for (let col = 0; col < cols; col++) {
    if (colCounts[col] === target) {
      for (let row = 0; row < rows; row++) {
        if (picture[row][col] === 'B' && rowCounts[row] === target) {
          const pattern = picture[row].join('');
          if (rowPatterns.get(pattern) === target) {
            result += target;
            break;
          }
        }
      }
    }
  }

  return result;
};
