/**
 * 6. ZigZag Conversion
 * https://leetcode.com/problems/zigzag-conversion/
 * Difficulty: Medium
 *
 * The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given
 * number of rows like this: (you may want to display this pattern in a
 * fixed font for better legibility)
 *
 * > P   A   H   N
 * > A P L S I I G
 * > Y   I   R
 *
 * And then read line by line: `"PAHNAPLSIIGYIR"`
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const order = [...new Array(numRows).keys()];
  order.push(...order.slice(1, -1).reverse());

  const rows = new Array(numRows).fill('');
  [...s].forEach((c, i) => (rows[order[i % order.length]] += c));

  return rows.join('');
};
