/**
 * 2060. Check if an Original String Exists Given Two Encoded Strings
 * https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/
 * Difficulty: Hard
 *
 * An original string, consisting of lowercase English letters, can be encoded by the following
 * steps:
 * - Arbitrarily split it into a sequence of some number of non-empty substrings.
 * - Arbitrarily choose some elements (possibly none) of the sequence, and replace each with its
 *   length (as a numeric string).
 * - Concatenate the sequence as the encoded string.
 *
 * For example, one way to encode an original string "abcdefghijklmnop" might be:
 * - Split it as a sequence: ["ab", "cdefghijklmn", "o", "p"].
 * - Choose the second and third elements to be replaced by their lengths, respectively. The
 *   sequence becomes ["ab", "12", "1", "p"].
 * - Concatenate the elements of the sequence to get the encoded string: "ab121p".
 *
 * Given two encoded strings s1 and s2, consisting of lowercase English letters and digits 1-9
 * (inclusive), return true if there exists an original string that could be encoded as both s1
 * and s2. Otherwise, return false.
 *
 * Note: The test cases are generated such that the number of consecutive digits in s1 and s2
 * does not exceed 3.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var possiblyEquals = function(s1, s2) {
  const memo = new Array(s1.length + 1).fill().map(() => new Array(s2.length + 1).fill()
    .map(() => ({})));

  function match(pos1, pos2, diff) {
    if (pos1 === s1.length && pos2 === s2.length) return diff === 0;
    if (memo[pos1][pos2][diff] !== undefined) return memo[pos1][pos2][diff];

    const char1 = s1[pos1];
    const char2 = s2[pos2];

    if (pos1 < s1.length && pos2 < s2.length && char1 === char2 && diff === 0) {
      if (match(pos1 + 1, pos2 + 1, 0)) return true;
    }

    if (pos1 < s1.length && isNaN(char1) && diff < 0) {
      if (match(pos1 + 1, pos2, diff + 1)) return true;
    }

    if (pos2 < s2.length && isNaN(char2) && diff > 0) {
      if (match(pos1, pos2 + 1, diff - 1)) return true;
    }

    let num = 0;
    for (let i = 0; i < 3 && pos1 + i < s1.length; i++) {
      if (isNaN(s1[pos1 + i])) break;
      num = num * 10 + parseInt(s1[pos1 + i]);
      if (match(pos1 + i + 1, pos2, diff + num)) return true;
    }

    num = 0;
    for (let i = 0; i < 3 && pos2 + i < s2.length; i++) {
      if (isNaN(s2[pos2 + i])) break;
      num = num * 10 + parseInt(s2[pos2 + i]);
      if (match(pos1, pos2 + i + 1, diff - num)) return true;
    }

    return memo[pos1][pos2][diff] = false;
  }

  return match(0, 0, 0);
};
