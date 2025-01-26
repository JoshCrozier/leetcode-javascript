/**
 * 91. Decode Ways
 * https://leetcode.com/problems/decode-ways/
 * Difficulty: Medium
 *
 * You have intercepted a secret message encoded as a string of numbers. The message
 * is decoded via the following mapping:
 * "1" -> 'A'
 * "2" -> 'B'
 * ...
 * "25" -> 'Y'
 * "26" -> 'Z'
 *
 * However, while decoding the message, you realize that there are many different
 * ways you can decode the message because some codes are contained in other codes
 * ("2" and "5" vs "25").
 *
 * For example, "11106" can be decoded into:
 * - "AAJF" with the grouping (1, 1, 10, 6)
 * - "KJF" with the grouping (11, 10, 6)
 * - The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6"
 *   is valid).
 *
 * Note: there may be strings that are impossible to decode.
 *
 * Given a string s containing only digits, return the number of ways to decode it.
 * If the entire string cannot be decoded in any valid way, return 0.
 *
 * The test cases are generated so that the answer fits in a 32-bit integer.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s == null || s.length === 0) return 0;
  if (s[0] === '0') return 0;

  const group = new Array(s.length + 1).fill(0);
  group[0] = 1;
  group[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const a = Number(s.slice(i - 1, i));
    if (a >= 1 && a <= 9) {
      group[i] += group[i - 1];
    }

    const b = Number(s.slice(i - 2, i));
    if (b >= 10 && b <= 26) {
      group[i] += group[i - 2];
    }
  }

  return group[s.length];
};
