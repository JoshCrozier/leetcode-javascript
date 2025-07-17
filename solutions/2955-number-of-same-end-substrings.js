/**
 * 2955. Number of Same-End Substrings
 * https://leetcode.com/problems/number-of-same-end-substrings/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string s, and a 2D array of integers queries, where
 * queries[i] = [li, ri] indicates a substring of s starting from the index li and
 * ending at the index ri (both inclusive), i.e. s[li..ri].
 *
 * Return an array ans where ans[i] is the number of same-end substrings of queries[i].
 *
 * A 0-indexed string t of length n is called same-end if it has the same character at
 * both of its ends, i.e., t[0] == t[n - 1].
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 */

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sameEndSubstringCount = function(s, queries) {
  const n = s.length;
  const prefixCounts = new Array(26).fill().map(() => new Array(n + 1).fill(0));

  for (let i = 0; i < n; i++) {
    const charIndex = s.charCodeAt(i) - 97;
    for (let j = 0; j < 26; j++) {
      prefixCounts[j][i + 1] = prefixCounts[j][i];
    }
    prefixCounts[charIndex][i + 1]++;
  }

  const result = [];

  for (const [left, right] of queries) {
    let count = 0;

    for (let charIndex = 0; charIndex < 26; charIndex++) {
      const charCount = prefixCounts[charIndex][right + 1] - prefixCounts[charIndex][left];
      count += Math.floor(charCount * (charCount + 1) / 2);
    }

    result.push(count);
  }

  return result;
};
