/**
 * 1977. Number of Ways to Separate Numbers
 * https://leetcode.com/problems/number-of-ways-to-separate-numbers/
 * Difficulty: Hard
 *
 * You wrote down many positive integers in a string called num. However, you realized that you
 * forgot to add commas to seperate the different numbers. You remember that the list of integers
 * was non-decreasing and that no integer had leading zeros.
 *
 * Return the number of possible lists of integers that you could have written down to get the
 * string num. Since the answer may be large, return it modulo 109 + 7.
 */

/**
 * @param {string} num
 * @return {number}
 */
var numberOfCombinations = function(num) {
  const n = num.length;
  if (num[0] === '0') return 0;

  const MOD = 1e9 + 7;
  const lcp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (num[i] === num[j]) {
        lcp[i][j] = lcp[i + 1][j + 1] + 1;
      }
    }
  }

  const dp = new Array(n).fill().map(() => new Array(n + 1).fill(0));
  const prefixSum = new Array(n).fill().map(() => new Array(n + 1).fill(0));

  dp[0][1] = 1;
  prefixSum[0][1] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      prefixSum[i - 1][j] = (prefixSum[i - 1][j - 1] + dp[i - 1][j]) % MOD;
    }

    for (let len = 1; len <= i + 1; len++) {
      if (num[i - len + 1] === '0') continue;

      if (i - len < 0) {
        dp[i][len] = 1;
        continue;
      }

      dp[i][len] = prefixSum[i - len][Math.min(i - len + 1, len)];

      if (len <= i - len + 1) {
        const start1 = i - 2 * len + 1;
        const start2 = i - len + 1;

        if (!compare(start1, start2, len)) {
          dp[i][len] = (dp[i][len] - dp[i - len][len] + MOD) % MOD;
        }
      }
    }

    prefixSum[i][0] = 0;
    for (let j = 1; j <= i + 1; j++) {
      prefixSum[i][j] = (prefixSum[i][j - 1] + dp[i][j]) % MOD;
    }
  }

  return prefixSum[n - 1][n];

  function compare(i1, i2, len) {
    const commonLen = lcp[i1][i2];
    if (commonLen >= len) return true;
    return i1 + commonLen < n && i2 + commonLen < n && num[i1 + commonLen] <= num[i2 + commonLen];
  }
};
