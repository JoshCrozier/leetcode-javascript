/**
 * 2027. Minimum Moves to Convert String
 * https://leetcode.com/problems/minimum-moves-to-convert-string/
 * Difficulty: Easy
 *
 * You are given a string s consisting of n characters which are either 'X' or 'O'.
 *
 * A move is defined as selecting three consecutive characters of s and converting them
 * to 'O'. Note that if a move is applied to the character 'O', it will stay the same.
 *
 * Return the minimum number of moves required so that all the characters of s are
 * converted ]to 'O'.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
  return s.match(/X.{0,2}/g)?.length ?? 0;
};
