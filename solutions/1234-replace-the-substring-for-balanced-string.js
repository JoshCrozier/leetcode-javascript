/**
 * 1234. Replace the Substring for Balanced String
 * https://leetcode.com/problems/replace-the-substring-for-balanced-string/
 * Difficulty: Medium
 *
 * You are given a string s of length n containing only four kinds of characters:
 * 'Q', 'W', 'E', and 'R'.
 *
 * A string is said to be balanced if each of its characters appears n / 4 times where n is
 * the length of the string.
 *
 * Return the minimum length of the substring that can be replaced with any other string of
 * the same length to make s balanced. If s is already balanced, return 0.
 */

/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
  const target = s.length / 4;
  const charCount = { Q: 0, W: 0, E: 0, R: 0 };

  for (const char of s) {
    charCount[char]++;
  }

  if (Object.values(charCount).every(count => count === target)) return 0;

  let result = s.length;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    charCount[s[right]]--;

    while (left <= right && Object.values(charCount).every(count => count <= target)) {
      result = Math.min(result, right - left + 1);
      charCount[s[left]]++;
      left++;
    }
  }

  return result;
};
