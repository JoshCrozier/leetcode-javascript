/**
 * 3337. Total Characters in String After Transformations II
 * https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/
 * Difficulty: Hard
 *
 * You are given a string s consisting of lowercase English letters, an integer t representing
 * the number of transformations to perform, and an array nums of size 26. In one transformation,
 * every character in s is replaced according to the following rules:
 * - Replace s[i] with the next nums[s[i] - 'a'] consecutive characters in the alphabet. For
 *   example, if s[i] = 'a' and nums[0] = 3, the character 'a' transforms into the next 3
 *   consecutive characters ahead of it, which results in "bcd".
 * - The transformation wraps around the alphabet if it exceeds 'z'. For example, if s[i] = 'y'
 *   and nums[24] = 3, the character 'y' transforms into the next 3 consecutive characters ahead
 *   of it, which results in "zab".
 *
 * Return the length of the resulting string after exactly t transformations.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {string} s
 * @param {number} t
 * @param {number[]} nums
 * @return {number}
 */
var lengthAfterTransformations = function(s, t, nums) {
  const MOD = 1000000007n;
  const freq = new Array(26).fill(0n);

  for (const char of s) {
    freq[char.charCodeAt(0) - 97]++;
  }

  const matrix = new Array(26).fill().map(() => new Array(26).fill(0n));
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < nums[i]; j++) {
      matrix[(i + j + 1) % 26][i] = 1n;
    }
  }

  const finalMatrix = matrixPower(matrix, t);
  let total = 0n;

  for (let i = 0; i < 26; i++) {
    let sum = 0n;
    for (let j = 0; j < 26; j++) {
      sum = (sum + finalMatrix[i][j] * freq[j]) % MOD;
    }
    total = (total + sum) % MOD;
  }

  return Number(total);

  function matrixMultiply(a, b) {
    const result = new Array(26).fill().map(() => new Array(26).fill(0n));
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        for (let k = 0; k < 26; k++) {
          result[i][j] = (result[i][j] + a[i][k] * b[k][j]) % MOD;
        }
      }
    }
    return result;
  }

  function matrixPower(mat, power) {
    let result = new Array(26).fill().map(() => new Array(26).fill(0n));
    for (let i = 0; i < 26; i++) result[i][i] = 1n;

    while (power > 0) {
      if (power & 1) result = matrixMultiply(result, mat);
      mat = matrixMultiply(mat, mat);
      power >>= 1;
    }
    return result;
  }
};
