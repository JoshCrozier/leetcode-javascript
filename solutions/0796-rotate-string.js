/**
 * 796. Rotate String
 * https://leetcode.com/problems/rotate-string/
 * Difficulty: Easy
 *
 * Given two strings s and goal, return true if and only if s can become goal
 * after some number of shifts on s.
 *
 * A shift on s consists of moving the leftmost character of s to the rightmost
 * position.
 *
 * For example, if s = "abcde", then it will be "bcdea" after one shift.
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i) + s.slice(0, i) === goal) return true;
  }
  return false;
};
