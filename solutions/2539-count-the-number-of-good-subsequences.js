/**
 * 2539. Count the Number of Good Subsequences
 * https://leetcode.com/problems/count-the-number-of-good-subsequences/
 * Difficulty: Medium
 *
 * A subsequence of a string is good if it is not empty and the frequency of each one of its
 * characters is the same.
 *
 * Given a string s, return the number of good subsequences of s. Since the answer may be too
 * large, return it modulo 109 + 7.
 *
 * A subsequence is a string that can be derived from another string by deleting some or no
 * characters without changing the order of the remaining characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubsequences = function(s) {
  const MOD = 1e9 + 7;
  const n = s.length;
  const factorial = new Array(n + 1);

  const frequency = new Array(26).fill(0);
  let maxFrequency = 0;

  for (let i = 0; i < n; i++) {
    frequency[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    maxFrequency = Math.max(maxFrequency, frequency[i]);
  }

  let result = 0n;

  for (let k = 1; k <= maxFrequency; k++) {
    let current = 1n;
    for (let i = 0; i < 26; i++) {
      if (frequency[i] > 0) {
        current = (current * (1n + combination(frequency[i], k))) % BigInt(MOD);
      }
    }
    result = (result + current - 1n + BigInt(MOD)) % BigInt(MOD);
  }

  return Number(result);

  function computeFactorial(num) {
    if (factorial[num] !== undefined) return factorial[num];
    if (num === 0) {
      factorial[num] = 1n;
    } else {
      factorial[num] = (computeFactorial(num - 1) * BigInt(num)) % BigInt(MOD);
    }
    return factorial[num];
  }

  function modInverse(a) {
    let result = 1n;
    let base = a % BigInt(MOD);
    let exp = BigInt(MOD - 2);
    while (exp > 0n) {
      if (exp & 1n) result = (result * base) % BigInt(MOD);
      base = (base * base) % BigInt(MOD);
      exp >>= 1n;
    }
    return result;
  }

  function combination(n, k) {
    if (n < k) return 0n;
    if (n === k) return 1n;
    let result = computeFactorial(n);
    result = (result * modInverse(computeFactorial(k))) % BigInt(MOD);
    result = (result * modInverse(computeFactorial(n - k))) % BigInt(MOD);
    return result;
  }
};
