/**
 * 2223. Sum of Scores of Built Strings
 * https://leetcode.com/problems/sum-of-scores-of-built-strings/
 * Difficulty: Hard
 *
 * You are building a string s of length n one character at a time, prepending each new character
 * to the front of the string. The strings are labeled from 1 to n, where the string with length
 * i is labeled si.
 * - For example, for s = "abaca", s1 == "a", s2 == "ca", s3 == "aca", etc.
 *
 * The score of si is the length of the longest common prefix between si and sn (Note that s == sn).
 *
 * Given the final string s, return the sum of the score of every si.
 */

/**
 * @param {string} s
 * @return {number}
 */
var sumScores = function(s) {
  const n = s.length;
  const z = new Array(n).fill(0);
  let left = 0;
  let right = 0;

  for (let i = 1; i < n; i++) {
    if (i <= right) {
      z[i] = Math.min(right - i + 1, z[i - left]);
    }
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
      z[i]++;
    }
    if (i + z[i] - 1 > right) {
      left = i;
      right = i + z[i] - 1;
    }
  }

  return z.reduce((sum, val) => sum + val, n);
};
