/**
 * 2904. Shortest and Lexicographically Smallest Beautiful String
 * https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/
 * Difficulty: Medium
 *
 * You are given a binary string s and a positive integer k.
 *
 * A substring of s is beautiful if the number of 1's in it is exactly k.
 *
 * Let len be the length of the shortest beautiful substring.
 *
 * Return the lexicographically smallest beautiful substring of string s with length equal to
 * len. If s doesn't contain a beautiful substring, return an empty string.
 *
 * A string a is lexicographically larger than a string b (of the same length) if in the first
 * position where a and b differ, a has a character strictly larger than the corresponding
 * character in b.
 * - For example, "abcd" is lexicographically larger than "abcc" because the first position they
 *   differ is at the fourth character, and d is greater than c.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
  let minLength = Infinity;
  let result = '';

  for (let start = 0; start < s.length; start++) {
    let onesCount = 0;
    for (let end = start; end < s.length; end++) {
      if (s[end] === '1') onesCount++;
      if (onesCount === k) {
        const currentLength = end - start + 1;
        const currentSubstring = s.slice(start, end + 1);
        if (currentLength < minLength
            || (currentLength === minLength && currentSubstring < result)) {
          minLength = currentLength;
          result = currentSubstring;
        }
      }
    }
  }

  return result;
};
