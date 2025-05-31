/**
 * 2712. Minimum Cost to Make All Characters Equal
 * https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/
 * Difficulty: Medium
 *
 * You are given a 0-indexed binary string s of length n on which you can apply two types
 * of operations:
 * - Choose an index i and invert all characters from index 0 to index i (both inclusive),
 *   with a cost of i + 1
 * - Choose an index i and invert all characters from index i to index n - 1 (both inclusive),
 *   with a cost of n - i
 *
 * Return the minimum cost to make all characters of the string equal.
 *
 * Invert a character means if its value is '0' it becomes '1' and vice-versa.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function(s) {
  let result = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      result += Math.min(i, s.length - i);
    }
  }

  return result;
};
