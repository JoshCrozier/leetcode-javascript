/**
 * 2194. Cells in a Range on an Excel Sheet
 * https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
 * Difficulty: Easy
 *
 * A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:
 * - <col> denotes the column number c of the cell. It is represented by alphabetical letters.
 *   - For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
 * - <row> is the row number r of the cell. The rth row is represented by the integer r.
 *   - You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents
 *     the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2>
 *     represents the row r2, such that r1 <= r2 and c1 <= c2.
 *
 * Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should
 * be represented as strings in the format mentioned above and be sorted in non-decreasing order
 * first by columns and then by rows.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
  const result = [];
  const startCol = s.charCodeAt(0);
  const endCol = s.charCodeAt(3);
  const startRow = parseInt(s[1], 10);
  const endRow = parseInt(s[4], 10);

  for (let col = startCol; col <= endCol; col++) {
    for (let row = startRow; row <= endRow; row++) {
      result.push(String.fromCharCode(col) + row);
    }
  }

  return result;
};
