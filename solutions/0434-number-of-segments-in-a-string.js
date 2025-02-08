/**
 * 434. Number of Segments in a String
 * https://leetcode.com/problems/number-of-segments-in-a-string/
 * Difficulty: Easy
 *
 * Given a string s, return the number of segments in the string.
 *
 * A segment is defined to be a contiguous sequence of non-space characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.split(/\s+/).filter(s => s).length;
};
