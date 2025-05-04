/**
 * 1987. Number of Unique Good Subsequences
 * https://leetcode.com/problems/number-of-unique-good-subsequences/
 * Difficulty: Hard
 *
 * You are given a binary string binary. A subsequence of binary is considered good if it is not
 * empty and has no leading zeros (with the exception of "0").
 *
 * Find the number of unique good subsequences of binary.
 * - For example, if binary = "001", then all the good subsequences are ["0", "0", "1"], so the
 *   unique good subsequences are "0" and "1". Note that subsequences "00", "01", and "001" are
 *   not good because they have leading zeros.
 *
 * Return the number of unique good subsequences of binary. Since the answer may be very large,
 * return it modulo 109 + 7.
 *
 * A subsequence is a sequence that can be derived from another sequence by deleting some or no
 * elements without changing the order of the remaining elements.
 */

/**
 * @param {string} binary
 * @return {number}
 */
var numberOfUniqueGoodSubsequences = function(binary) {
  const MOD = 1e9 + 7;
  let endsWithZero = 0;
  let endsWithOne = 0;
  let hasZero = false;

  for (const digit of binary) {
    if (digit === '0') {
      hasZero = true;
      endsWithZero = (endsWithZero + endsWithOne) % MOD;
    } else {
      endsWithOne = (endsWithOne + endsWithZero + 1) % MOD;
    }
  }

  return (endsWithZero + endsWithOne + (hasZero ? 1 : 0)) % MOD;
};
