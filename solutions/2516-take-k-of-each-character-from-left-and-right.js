/**
 * 2516. Take K of Each Character From Left and Right
 * https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/
 * Difficulty: Medium
 *
 * You are given a string s consisting of the characters 'a', 'b', and 'c' and a non-negative
 * integer k. Each minute, you may take either the leftmost character of s, or the rightmost
 * character of s.
 *
 * Return the minimum number of minutes needed for you to take at least k of each character,
 * or return -1 if it is not possible to take k of each character.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
  const n = s.length;
  const counts = { a: 0, b: 0, c: 0 };

  for (const char of s) {
    counts[char]++;
  }

  if (counts.a < k || counts.b < k || counts.c < k) return -1;

  let maxWindow = 0;
  let left = 0;
  const windowCounts = { a: 0, b: 0, c: 0 };

  for (let right = 0; right < n; right++) {
    windowCounts[s[right]]++;

    while (windowCounts.a > counts.a - k || windowCounts.b > counts.b - k
          || windowCounts.c > counts.c - k) {
      windowCounts[s[left]]--;
      left++;
    }

    maxWindow = Math.max(maxWindow, right - left + 1);
  }

  return n - maxWindow;
};
