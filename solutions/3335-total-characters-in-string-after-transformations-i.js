/**
 * 3335. Total Characters in String After Transformations I
 * https://leetcode.com/problems/total-characters-in-string-after-transformations-i/
 * Difficulty: Medium
 *
 * You are given a string s and an integer t, representing the number of transformations to
 * perform. In one transformation, every character in s is replaced according to the following
 * rules:
 * - If the character is 'z', replace it with the string "ab".
 * - Otherwise, replace it with the next character in the alphabet. For example, 'a' is replaced
 *   with 'b', 'b' is replaced with 'c', and so on.
 *
 * Return the length of the resulting string after exactly t transformations.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
  const MOD = 1e9 + 7;
  const freq = new Array(26).fill(0);

  for (const char of s) {
    freq[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < t; i++) {
    const newFreq = new Array(26).fill(0);
    for (let j = 0; j < 25; j++) {
      newFreq[j + 1] = freq[j];
    }
    newFreq[0] = (newFreq[0] + freq[25]) % MOD;
    newFreq[1] = (newFreq[1] + freq[25]) % MOD;
    freq.splice(0, 26, ...newFreq);
  }

  let result = 0;
  for (const count of freq) {
    result = (result + count) % MOD;
  }

  return result;
};
