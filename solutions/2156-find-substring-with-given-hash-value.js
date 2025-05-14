/**
 * 2156. Find Substring With Given Hash Value
 * https://leetcode.com/problems/find-substring-with-given-hash-value/
 * Difficulty: Hard
 *
 * The hash of a 0-indexed string s of length k, given integers p and m, is computed using
 * the following function:
 * - hash(s, p, m) = (val(s[0]) * p0 + val(s[1]) * p1 + ... + val(s[k-1]) * pk-1) mod m.
 *
 * Where val(s[i]) represents the index of s[i] in the alphabet from val('a') = 1 to val('z') = 26.
 *
 * You are given a string s and the integers power, modulo, k, and hashValue. Return sub, the
 * first substring of s of length k such that hash(sub, power, modulo) == hashValue.
 *
 * The test cases will be generated such that an answer always exists.
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 */

/**
* @param {string} s
* @param {number} power
* @param {number} modulo
* @param {number} k
* @param {number} hashValue
* @return {string}
*/
var subStrHash = function(s, power, modulo, k, hashValue) {
  power = BigInt(power);
  modulo = BigInt(modulo);
  hashValue = BigInt(hashValue);

  const powers = new Array(k);
  powers[0] = 1n;
  for (let i = 1; i < k; i++) {
    powers[i] = (powers[i - 1] * power) % modulo;
  }

  for (let start = 0; start <= s.length - k; start++) {
    let hash = 0n;
    for (let i = 0; i < k; i++) {
      const charVal = BigInt(s.charCodeAt(start + i) - 'a'.charCodeAt(0) + 1);
      hash = (hash + charVal * powers[i]) % modulo;
    }
    if (hash === hashValue) {
      return s.substring(start, start + k);
    }
  }

  return '';
};
