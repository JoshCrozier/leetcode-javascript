/**
 * 2450. Number of Distinct Binary Strings After Applying Operations
 * https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/
 * Difficulty: Medium
 *
 * You are given a binary string s and a positive integer k.
 *
 * You can apply the following operation on the string any number of times:
 * - Choose any substring of size k from s and flip all its characters, that is, turn all 1's
 *   into 0's, and all 0's into 1's.
 * - Return the number of distinct strings you can obtain. Since the answer may be too large,
 *   return it modulo 109 + 7.
 *
 * Note that:
 * - A binary string is a string that consists only of the characters 0 and 1.
 * - A substring is a contiguous part of a string.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countDistinctStrings = function(s, k) {
  if (s.length <= 0) {
    return -1;
  }

  const MOD = 1e9 + 7;
  let n = s.length - k + 1;
  let result = 1;

  while (n > 0) {
    result = (result << 1) % MOD;
    n--;
  }

  return result;
};
