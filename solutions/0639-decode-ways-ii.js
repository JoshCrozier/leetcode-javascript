/**
 * 639. Decode Ways II
 * https://leetcode.com/problems/decode-ways-ii/
 * Difficulty: Hard
 *
 * A message containing letters from A-Z can be encoded into numbers using the following mapping:
 * - 'A' -> "1"
 * - 'B' -> "2"
 * - 'Z' -> "26"
 *
 * To decode an encoded message, all the digits must be grouped then mapped back into letters using
 * the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped
 * into:
 * - "AAJF" with the grouping (1 1 10 6)
 * - "KJF" with the grouping (11 10 6)
 *
 * Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is
 * different from "06".
 *
 * In addition to the mapping above, an encoded message may contain the '*' character, which can
 * represent any digit from '1' to '9' ('0' is excluded). For example, the encoded message "1*"
 * may represent any of the encoded messages "11", "12", "13", "14", "15", "16", "17", "18", or
 * "19". Decoding "1*" is equivalent to decoding any of the encoded messages it can represent.
 *
 * Given a string s consisting of digits and '*' characters, return the number of ways to decode it.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const mod = 1e9 + 7;
  let [i0, i1, i2, i3] = [1, 0, 0, 0];

  for (const c of s) {
    if (c == '*') {
      i3 = 9 * i0 + 9 * i1 + 6 * i2;
      i1 = i0;
      i2 = i0;
    } else {
      i3 = (c > '0') * i0 + i1 + (c <= '6') * i2;
      i1 = (c == '1') * i0;
      i2 = (c == '2') * i0;
    }
    i0 = i3 % mod;
  }

  return i0;
};
