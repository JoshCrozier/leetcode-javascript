/**
 * 3223. Minimum Length of String After Operations
 * https://leetcode.com/problems/minimum-length-of-string-after-operations/
 * Difficulty: Medium
 *
 * You are given a string s.
 *
 * You can perform the following process on s any number of times:
 * - Choose an index i in the string such that there is at least one character to the left of
 *   index i that is equal to s[i], and at least one character to the right that is also equal
 *   to s[i].
 * - Delete the closest character to the left of index i that is equal to s[i].
 * - Delete the closest character to the right of index i that is equal to s[i].
 *
 * Return the minimum length of the final string s that you can achieve.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  if (s.length < 3) return s.length;

  const map = new Map();
  s.split('').forEach(c => map.set(c, (map.get(c) ?? 0) + 1));

  return [...map.values()].reduce((count, n) => count + (n % 2 ? n % 2 : 2), 0);
};
