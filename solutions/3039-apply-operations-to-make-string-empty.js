/**
 * 3039. Apply Operations to Make String Empty
 * https://leetcode.com/problems/apply-operations-to-make-string-empty/
 * Difficulty: Medium
 *
 * You are given a string s.
 *
 * Consider performing the following operation until s becomes empty:
 * - For every alphabet character from 'a' to 'z', remove the first occurrence of that
 *   character in s (if it exists).
 *
 * For example, let initially s = "aabcbbca". We do the following operations:
 * - Remove the underlined characters s = "aabcbbca". The resulting string is s = "abbca".
 * - Remove the underlined characters s = "abbca". The resulting string is s = "ba".
 * - Remove the underlined characters s = "ba". The resulting string is s = "".
 *
 * Return the value of the string s right before applying the last operation. In the
 * example above, answer is "ba".
 */

/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function(s) {
  const charCount = new Array(26).fill(0);
  let maxFrequency = 0;

  for (const char of s) {
    const index = char.charCodeAt(0) - 97;
    charCount[index]++;
    maxFrequency = Math.max(maxFrequency, charCount[index]);
  }

  let result = '';
  for (let i = s.length - 1; i >= 0; i--) {
    const index = s.charCodeAt(i) - 97;
    if (charCount[index] === maxFrequency) {
      result = s[i] + result;
      charCount[index]--;
    }
  }

  return result;
};
