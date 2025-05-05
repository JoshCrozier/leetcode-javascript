/**
 * 2014. Longest Subsequence Repeated k Times
 * https://leetcode.com/problems/longest-subsequence-repeated-k-times/
 * Difficulty: Hard
 *
 * You are given a string s of length n, and an integer k. You are tasked to find the longest
 * subsequence repeated k times in string s.
 *
 * A subsequence is a string that can be derived from another string by deleting some or no
 * characters without changing the order of the remaining characters.
 *
 * A subsequence seq is repeated k times in the string s if seq * k is a subsequence of s,
 * where seq * k represents a string constructed by concatenating seq k times.
 * - For example, "bba" is repeated 2 times in the string "bababcba", because the string
 *   "bbabba", constructed by concatenating "bba" 2 times, is a subsequence of the
 *   string "bababcba".
 *
 * Return the longest subsequence repeated k times in string s. If multiple such subsequences
 * are found, return the lexicographically largest one. If there is no such subsequence,
 * return an empty string.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function(s, k) {
  const n = s.length;
  const freq = new Array(26).fill(0);
  for (const char of s) {
    freq[char.charCodeAt(0) - 97]++;
  }

  let candidates = '';
  for (let i = 0; i < 26; i++) {
    const count = Math.floor(freq[i] / k);
    candidates += String.fromCharCode(97 + i).repeat(count);
  }

  function canFormSubsequence(seq) {
    let j = 0;
    for (let i = 0; i < n && j < seq.length * k; i++) {
      if (s[i] === seq[j % seq.length]) j++;
    }
    return j >= seq.length * k;
  }

  let result = '';
  backtrack('', candidates);
  return result;

  function backtrack(curr, remaining) {
    if (curr.length > result.length || (curr.length === result.length && curr > result)) {
      if (canFormSubsequence(curr)) result = curr;
    }
    if (!remaining) return;

    for (let i = remaining.length - 1; i >= 0; i--) {
      const nextChar = remaining[i];
      backtrack(curr + nextChar, remaining.slice(0, i) + remaining.slice(i + 1));
    }
  }
};
