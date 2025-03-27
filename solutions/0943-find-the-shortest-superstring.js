/**
 * 943. Find the Shortest Superstring
 * https://leetcode.com/problems/find-the-shortest-superstring/
 * Difficulty: Hard
 *
 * Given an array of strings words, return the smallest string that contains each string in words
 * as a substring. If there are multiple valid strings of the smallest length, return any of them.
 *
 * You may assume that no string in words is a substring of another string in words.
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var shortestSuperstring = function(words) {
  const n = words.length;
  const overlap = Array(n).fill().map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        for (let k = Math.min(words[i].length, words[j].length); k > 0; k--) {
          if (words[i].slice(-k) === words[j].slice(0, k)) {
            overlap[i][j] = k;
            break;
          }
        }
      }
    }
  }

  const dp = new Array(1 << n).fill().map(() => new Array(n).fill(''));
  for (let i = 0; i < n; i++) {
    dp[1 << i][i] = words[i];
  }

  for (let mask = 1; mask < (1 << n); mask++) {
    for (let i = 0; i < n; i++) {
      if (!(mask & (1 << i))) continue;
      for (let j = 0; j < n; j++) {
        if (mask & (1 << j)) continue;
        const nextMask = mask | (1 << j);
        const candidate = dp[mask][i] + words[j].slice(overlap[i][j]);
        if (dp[nextMask][j] === '' || candidate.length < dp[nextMask][j].length) {
          dp[nextMask][j] = candidate;
        }
      }
    }
  }

  let result = dp[(1 << n) - 1][0];
  for (let i = 1; i < n; i++) {
    if (dp[(1 << n) - 1][i].length < result.length) {
      result = dp[(1 << n) - 1][i];
    }
  }

  return result;
};
