/**
 * 484. Find Permutation
 * https://leetcode.com/problems/find-permutation/
 * Difficulty: Medium
 *
 * A permutation perm of n integers of all the integers in the range [1, n] can be
 * represented as a string s of length n - 1 where:
 * - s[i] == 'I' if perm[i] < perm[i + 1], and
 * - s[i] == 'D' if perm[i] > perm[i + 1].
 *
 * Given a string s, reconstruct the lexicographically smallest permutation perm and return it.
 */

/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function(s) {
  const n = s.length + 1;
  const result = new Array(n).fill(0).map((_, i) => i + 1);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'D') {
      let start = i;
      while (i < s.length && s[i] === 'D') {
        i++;
      }
      let end = i;
      while (start < end) {
        [result[start], result[end]] = [result[end], result[start]];
        start++;
        end--;
      }
      i--;
    }
  }

  return result;
};
