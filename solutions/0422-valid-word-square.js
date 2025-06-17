/**
 * 422. Valid Word Square
 * https://leetcode.com/problems/valid-word-square/
 * Difficulty: Easy
 *
 * Given an array of strings words, return true if it forms a valid word square.
 *
 * A sequence of strings forms a valid word square if the kth row and column read the same
 * string, where 0 <= k < max(numRows, numColumns).
 */

/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
  const rowCount = words.length;

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    const row = words[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      if (colIndex >= rowCount || rowIndex >= words[colIndex].length
          || row[colIndex] !== words[colIndex][rowIndex]) {
        return false;
      }
    }
  }

  return true;
};
