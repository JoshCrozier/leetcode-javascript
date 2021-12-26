/**
 * 500. Keyboard Row
 * https://leetcode.com/problems/keyboard-row/
 * Difficulty: Easy
 *
 * Given an array of strings words, return the words that can be typed using letters
 * of the alphabet on only one row of American keyboard like the image below.
 *
 * In the American keyboard:
 * - the first row consists of the characters "qwertyuiop",
 * - the second row consists of the characters "asdfghjkl", and
 * - the third row consists of the characters "zxcvbnm".
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  return words.filter(word => rows.some(row => word.toLowerCase().split('').every(s => row.includes(s))));
};
