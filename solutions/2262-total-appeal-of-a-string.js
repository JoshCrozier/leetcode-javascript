/**
 * 2262. Total Appeal of A String
 * https://leetcode.com/problems/total-appeal-of-a-string/
 * Difficulty: Hard
 *
 * The appeal of a string is the number of distinct characters found in the string.
 * - For example, the appeal of "abbca" is 3 because it has 3 distinct characters:
 *   'a', 'b', and 'c'.
 *
 * Given a string s, return the total appeal of all of its substrings.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function(s) {
  const n = s.length;
  const lastSeen = new Array(26).fill(-1);
  let result = 0;

  for (let i = 0; i < n; i++) {
    const charIndex = s.charCodeAt(i) - 97;
    result += (i - lastSeen[charIndex]) * (n - i);
    lastSeen[charIndex] = i;
  }

  return result;
};
