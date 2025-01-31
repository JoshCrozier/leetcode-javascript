/**
 * 171. Excel Sheet Column Number
 * https://leetcode.com/problems/excel-sheet-column-number/
 * Difficulty: Easy
 *
 * Given a string columnTitle that represents the column title as appears in
 * an Excel sheet, return its corresponding column number.
 */

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  return columnTitle.split('').reduce((result, c, i) => {
    return result + (c.charCodeAt() - 64) * Math.pow(26, columnTitle.length - (i + 1));
  }, 0);
};
