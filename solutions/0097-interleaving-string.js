/**
 * 97. Interleaving String
 * https://leetcode.com/problems/interleaving-string/
 * Difficulty: Medium
 *
 * Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
 *
 * An interleaving of two strings s and t is a configuration where s and t are divided into
 * n and m substrings respectively, such that:
 * - s = s1 + s2 + ... + sn
 * - t = t1 + t2 + ... + tm
 * - |n - m| <= 1
 * - The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
 *
 * Note: a + b is the concatenation of strings a and b.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const values = new Array(s1.length + 1).fill().map(() => []);

  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      values[i][j] = i && values[i - 1][j] && s3[i + j - 1] === s1[i - 1]
        || j && values[i][j - 1] && s3[i + j - 1] === s2[j - 1] || !i && !j;
    }
  }

  return Boolean(values.pop().pop());
};
