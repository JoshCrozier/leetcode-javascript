/**
 * 139. Word Break
 * https://leetcode.com/problems/word-break/
 * Difficulty: Medium
 *
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into
 * a space-separated sequence of one or more dictionary words.
 *
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const result = [1, ...new Array(s.length + 1).fill(0)];

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (result[j] && wordDict.includes(s.slice(j, i))) {
        result[i] = 1;
        break;
      }
    }
  }

  return result[s.length];
};
