/**
 * 3333. Find the Original Typed String II
 * https://leetcode.com/problems/find-the-original-typed-string-ii/
 * Difficulty: Hard
 *
 * Alice is attempting to type a specific string on her computer. However, she tends to be
 * clumsy and may press a key for too long, resulting in a character being typed multiple times.
 *
 * You are given a string word, which represents the final output displayed on Alice's screen.
 * You are also given a positive integer k.
 *
 * Return the total number of possible original strings that Alice might have intended to type,
 * if she was trying to type a string of size at least k.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var possibleStringCount = function(word, k) {
  const MOD = 1e9 + 7;
  const groups = [];
  let count = 1;

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      count++;
    } else {
      groups.push(count);
      count = 1;
    }
  }
  groups.push(count);

  const n = groups.length;

  let totalWays = 1;
  for (const groupSize of groups) {
    totalWays = (totalWays * groupSize) % MOD;
  }

  if (k <= n) {
    return totalWays;
  }

  let dp = new Array(k).fill(0);
  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    const newDp = new Array(k).fill(0);
    const groupSize = groups[i];

    let sum = 0;
    for (let j = 0; j < Math.min(groupSize, k); j++) {
      sum = (sum + dp[j]) % MOD;
      newDp[j + 1] = sum;
    }

    for (let j = groupSize; j < k; j++) {
      sum = (sum + dp[j] - dp[j - groupSize] + MOD) % MOD;
      if (j + 1 < k) {
        newDp[j + 1] = sum;
      }
    }

    dp = newDp;
  }

  let invalidWays = 0;
  for (let j = 0; j < k; j++) {
    invalidWays = (invalidWays + dp[j]) % MOD;
  }

  return (totalWays - invalidWays + MOD) % MOD;
};
