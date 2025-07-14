/**
 * 2743. Count Substrings Without Repeating Character
 * https://leetcode.com/problems/count-substrings-without-repeating-character/
 * Difficulty: Medium
 *
 * You are given a string s consisting only of lowercase English letters. We call a substring
 * special if it contains no character which has occurred at least twice (in other words, it
 * does not contain a repeating character). Your task is to count the number of special
 * substrings. For example, in the string "pop", the substring "po" is a special substring,
 * however, "pop" is not special (since 'p' has occurred twice).
 *
 * Return the number of special substrings.
 *
 * A substring is a contiguous sequence of characters within a string. For example, "abc" is
 * a substring of "abcd", but "acd" is not.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSpecialSubstrings = function(s) {
  const n = s.length;
  const map = new Map();
  let result = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    const char = s[right];
    map.set(char, (map.get(char) || 0) + 1);

    while (map.get(char) > 1) {
      const leftChar = s[left];
      map.set(leftChar, map.get(leftChar) - 1);
      if (map.get(leftChar) === 0) {
        map.delete(leftChar);
      }
      left++;
    }

    result += right - left + 1;
  }

  return result;
};
