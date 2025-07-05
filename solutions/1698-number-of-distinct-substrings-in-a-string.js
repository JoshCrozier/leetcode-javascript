/**
 * 1698. Number of Distinct Substrings in a String
 * https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/
 * Difficulty: Medium
 *
 * Given a string s, return the number of distinct substrings of s.
 *
 * A substring of a string is obtained by deleting any number of characters (possibly zero)
 * from the front of the string and any number (possibly zero) from the back of the string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countDistinct = function(s) {
  const set = new Set();
  const length = s.length;

  for (let start = 0; start < length; start++) {
    for (let end = start; end < length; end++) {
      set.add(s.substring(start, end + 1));
    }
  }

  return set.size;
};
