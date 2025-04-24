/**
 * 1639. Number of Ways to Form a Target String Given a Dictionary
 * https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/
 * Difficulty: Hard
 *
 * You are given a list of strings of the same length words and a string target.
 *
 * Your task is to form target using the given words under the following rules:
 * - target should be formed from left to right.
 * - To form the ith character (0-indexed) of target, you can choose the kth character of the jth
 *   string in words if target[i] = words[j][k].
 * - Once you use the kth character of the jth string of words, you can no longer use the xth
 *   character of any string in words where x <= k. In other words, all characters to the left of
 *   or at index k become unusuable for every string.
 * - Repeat the process until you form the string target.
 *
 * Notice that you can use multiple characters from the same string in words provided the
 * conditions above are met.
 *
 * Return the number of ways to form target from words. Since the answer may be too large, return
 * it modulo 109 + 7.
 */

/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
  const MOD = 1e9 + 7;
  const wordLength = words[0].length;
  const targetLength = target.length;
  const charCounts = Array(wordLength).fill().map(() => Array(26).fill(0));

  for (const word of words) {
    for (let i = 0; i < wordLength; i++) {
      charCounts[i][word.charCodeAt(i) - 97]++;
    }
  }

  const dp = Array(targetLength + 1).fill().map(() => Array(wordLength + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 0; i <= targetLength; i++) {
    for (let j = 0; j < wordLength; j++) {
      if (i < targetLength) {
        const charIndex = target.charCodeAt(i) - 97;
        dp[i + 1][j + 1] = (dp[i + 1][j + 1] + dp[i][j] * charCounts[j][charIndex]) % MOD;
      }
      dp[i][j + 1] = (dp[i][j + 1] + dp[i][j]) % MOD;
    }
  }

  return dp[targetLength][wordLength];
};
