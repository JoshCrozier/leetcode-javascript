/**
 * 1092. Shortest Common Supersequence
 * https://leetcode.com/problems/shortest-common-supersequence/
 * Difficulty: Hard
 *
 * Given two strings str1 and str2, return the shortest string that has both str1 and str2 as
 * subsequences. If there are multiple valid strings, return any of them.
 *
 * A string s is a subsequence of string t if deleting some number of characters from t (possibly
 * 0) results in the string s.
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
  const dp = new Array(str1.length + 1).fill().map(() => new Array(str2.length + 1).fill(0));
  let result = '';

  for (let i = 0; i <= str1.length; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= str2.length; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      dp[i][j] = str1[i-1] === str2[j-1] ? dp[i-1][j-1] + 1 : Math.min(dp[i-1][j], dp[i][j-1]) + 1;
    }
  }

  for (let i = str1.length, j = str2.length; i > 0 || j > 0;) {
    if (!i) {
      result = str2[--j] + result;
    } else if (!j) {
      result = str1[--i] + result;
    } else if (str1[i-1] === str2[j-1]) {
      result = str1[--i] + (str2[--j], result);
    } else {
      dp[i][j] === dp[i-1][j] + 1
        ? result = str1[--i] + result
        : result = str2[--j] + result;
    }
  }

  return result;
};
