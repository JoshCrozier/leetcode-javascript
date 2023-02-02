/**
 * 168. Excel Sheet Column Title
 * https://leetcode.com/problems/excel-sheet-column-title/
 * Difficulty: Easy
 *
 * Given an integer columnNumber, return its corresponding column
 * title as it appears in an Excel sheet.
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  const n = columnNumber - 1;
  return n >= 0 && n < 26
    ? String.fromCharCode(65 + n)
    : convertToTitle(parseInt(n / 26)) + convertToTitle((n % 26) + 1);
};
