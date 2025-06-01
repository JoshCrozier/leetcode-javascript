/**
 * 2745. Construct the Longest New String
 * https://leetcode.com/problems/construct-the-longest-new-string/
 * Difficulty: Medium
 *
 * You are given three integers x, y, and z.
 *
 * You have x strings equal to "AA", y strings equal to "BB", and z strings equal to "AB". You
 * want to choose some (possibly all or none) of these strings and concatenate them in some order
 * to form a new string. This new string must not contain "AAA" or "BBB" as a substring.
 *
 * Return the maximum possible length of the new string.
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
  const minPairs = Math.min(x, y);
  return 2 * (minPairs * 2 + (x > minPairs ? 1 : 0) + (y > minPairs ? 1 : 0) + z);
};
