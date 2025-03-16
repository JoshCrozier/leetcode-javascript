/**
 * 806. Number of Lines To Write String
 * https://leetcode.com/problems/number-of-lines-to-write-string/
 * Difficulty: Easy
 *
 * You are given a string s of lowercase English letters and an array widths denoting how many
 * pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a',
 * widths[1] is the width of 'b', and so on.
 *
 * You are trying to write s across several lines, where each line is no longer than 100 pixels.
 * Starting at the beginning of s, write as many letters on the first line such that the total
 * width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many
 * letters as you can on the second line. Continue this process until you have written all of s.
 *
 * Return an array result of length 2 where:
 * - result[0] is the total number of lines.
 * - result[1] is the width of the last line in pixels.
 */

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
  let lines = 1;
  let width = 0;

  for (const char of s) {
    const charWidth = widths[char.charCodeAt(0) - 97];

    if (width + charWidth > 100) {
      lines++;
      width = charWidth;
    } else {
      width += charWidth;
    }
  }

  return [lines, width];
};
