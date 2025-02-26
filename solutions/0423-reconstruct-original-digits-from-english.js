/**
 * 423. Reconstruct Original Digits from English
 * https://leetcode.com/problems/reconstruct-original-digits-from-english/
 * Difficulty: Medium
 *
 * Given a string s containing an out-of-order English representation of digits 0-9,
 * return the digits in ascending order.
 */

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  const c = new Array(26).fill(0);
  const d = new Array(10).fill(0);

  for (const char of s) c[char.charCodeAt(0) - 97]++;

  [d[0], d[2], d[4], d[6], d[8]] = [c[25], c[22], c[20], c[23], c[6]];
  d[3] = c[7] - d[8];
  d[5] = c[5] - d[4];
  d[7] = c[18] - d[6];
  d[1] = c[14] - d[0] - d[2] - d[4];
  d[9] = (c[13] - d[1] - d[7]) / 2;

  return d.reduce((str, count, i) => str + String(i).repeat(count), '');
};
