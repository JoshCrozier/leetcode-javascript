/**
 * 2901. Longest Unequal Adjacent Groups Subsequence II
 * https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/
 * Difficulty: Medium
 *
 * You are given a string array words, and an array groups, both arrays having length n.
 *
 * The hamming distance between two strings of equal length is the number of positions at which the
 * corresponding characters are different.
 *
 * You need to select the longest subsequence from an array of indices [0, 1, ..., n - 1], such
 * that for the subsequence denoted as [i0, i1, ..., ik-1] having length k, the following holds:
 * - For adjacent indices in the subsequence, their corresponding groups are unequal, i.e.,
 *   groups[ij] != groups[ij+1], for each j where 0 < j + 1 < k.
 * - words[ij] and words[ij+1] are equal in length, and the hamming distance between them is 1,
 *   where 0 < j + 1 < k, for all indices in the subsequence.
 *
 * Return a string array containing the words corresponding to the indices (in order) in the
 * selected subsequence. If there are multiple answers, return any of them.
 *
 * Note: strings in words may be unequal in length.
 */

/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(words, groups) {
  const n = words.length;
  const dp = new Array(n).fill(1);
  const prev = new Array(n).fill(-1);
  let maxLen = 1;
  let lastIndex = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (groups[i] !== groups[j] && helper(words[i], words[j])) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          prev[i] = j;
        }
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      lastIndex = i;
    }
  }

  const result = [];
  while (lastIndex !== -1) {
    result.push(words[lastIndex]);
    lastIndex = prev[lastIndex];
  }

  return result.reverse();

  function helper(s1, s2) {
    if (s1.length !== s2.length) return false;
    let diff = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) diff++;
      if (diff > 1) return false;
    }
    return diff === 1;
  }
};
