/**
 * 2067. Number of Equal Count Substrings
 * https://leetcode.com/problems/number-of-equal-count-substrings/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string s consisting of only lowercase English letters, and an
 * integer count. A substring of s is said to be an equal count substring if, for each
 * unique letter in the substring, it appears exactly count times in the substring.
 *
 * Return the number of equal count substrings in s.
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 */

/**
 * @param {string} s
 * @param {number} count
 * @return {number}
 */
var equalCountSubstrings = function(s, count) {
  const n = s.length;
  let result = 0;

  for (let uniqueChars = 1; uniqueChars <= 26; uniqueChars++) {
    const targetLength = uniqueChars * count;
    if (targetLength > n) break;

    const charCount = new Map();
    let validChars = 0;

    for (let right = 0; right < n; right++) {
      const rightChar = s[right];
      charCount.set(rightChar, (charCount.get(rightChar) || 0) + 1);

      if (charCount.get(rightChar) === count) {
        validChars++;
      } else if (charCount.get(rightChar) === count + 1) {
        validChars--;
      }

      if (right >= targetLength) {
        const leftChar = s[right - targetLength];
        if (charCount.get(leftChar) === count) {
          validChars--;
        } else if (charCount.get(leftChar) === count + 1) {
          validChars++;
        }

        charCount.set(leftChar, charCount.get(leftChar) - 1);
        if (charCount.get(leftChar) === 0) {
          charCount.delete(leftChar);
        }
      }

      if (right >= targetLength - 1 && validChars === uniqueChars
          && charCount.size === uniqueChars) {
        result++;
      }
    }
  }

  return result;
};
