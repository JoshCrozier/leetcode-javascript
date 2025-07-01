/**
 * 1427. Perform String Shifts
 * https://leetcode.com/problems/perform-string-shifts/
 * Difficulty: Easy
 *
 * You are given a string s containing lowercase English letters, and a matrix shift,
 * where shift[i] = [directioni, amounti]:
 * - directioni can be 0 (for left shift) or 1 (for right shift).
 * - amounti is the amount by which string s is to be shifted.
 * - A left shift by 1 means remove the first character of s and append it to the end.
 * - Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
 *
 * Return the final string after all operations.
 */

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  let netShift = 0;

  for (const [direction, amount] of shift) {
    netShift += direction === 0 ? -amount : amount;
  }

  const n = s.length;
  netShift = ((netShift % n) + n) % n;

  return s.slice(-netShift) + s.slice(0, -netShift);
};
