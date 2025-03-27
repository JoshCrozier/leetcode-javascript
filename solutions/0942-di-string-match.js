/**
 * 942. DI String Match
 * https://leetcode.com/problems/di-string-match/
 * Difficulty: Easy
 *
 * A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented
 * as a string s of length n where:
 * - s[i] == 'I' if perm[i] < perm[i + 1], and
 * - s[i] == 'D' if perm[i] > perm[i + 1].
 *
 * Given a string s, reconstruct the permutation perm and return it. If there are multiple valid
 * permutations perm, return any of them.
 */

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  const result = [];
  let low = 0;
  let high = s.length;

  for (const char of s) {
    if (char === 'I') {
      result.push(low);
      low++;
    } else {
      result.push(high);
      high--;
    }
  }

  result.push(low);
  return result;
};
