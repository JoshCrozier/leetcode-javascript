/**
 * 76. Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring/
 * Difficulty: Hard
 *
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring
 * of s such that every character in t (including duplicates) is included in the window. If there
 * is no such substring, return the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const values = new Array(128).fill(0);
  let [start, end] = [-Infinity, Infinity];

  for (let i = 0; i < t.length; i++) {
    values[t.charCodeAt(i)]++;
  }

  for (let i = 0, j = 0, total = t.length; i < s.length; i++) {
    if (values[s.charCodeAt(i)] > 0) {
      total--;
    }
    values[s.charCodeAt(i)]--;
    while (!total) {
      if (end - start > i - j) {
        [start, end] = [j, i];
      }
      values[s.charCodeAt(j)]++;
      if (values[s.charCodeAt(j)] > 0) {
        total++;
      }
      j++;
    }
  }

  return end !== Infinity ? s.slice(start, end + 1) : '';
};
