/**
 * 1573. Number of Ways to Split a String
 * https://leetcode.com/problems/number-of-ways-to-split-a-string/
 * Difficulty: Medium
 *
 * Given a binary string s, you can split s into 3 non-empty strings s1, s2, and s3
 * where s1 + s2 + s3 = s.
 *
 * Return the number of ways s can be split such that the number of ones is the same in s1,
 * s2, and s3. Since the answer may be too large, return it modulo 109 + 7.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numWays = function(s) {
  const MOD = 1e9 + 7;
  let ones = 0;

  for (const char of s) {
    if (char === '1') ones++;
  }

  if (ones % 3 !== 0) return 0;
  if (ones === 0) {
    return Number((BigInt(s.length - 1) * BigInt(s.length - 2) / 2n) % BigInt(MOD));
  }

  const targetOnes = ones / 3;
  let firstCount = 0;
  let secondCount = 0;
  let currentOnes = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') currentOnes++;
    if (currentOnes === targetOnes) firstCount++;
    else if (currentOnes === 2 * targetOnes) secondCount++;
  }

  return Number((BigInt(firstCount) * BigInt(secondCount)) % BigInt(MOD));
};
