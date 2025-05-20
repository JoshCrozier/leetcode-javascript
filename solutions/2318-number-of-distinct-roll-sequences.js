/**
 * 2318. Number of Distinct Roll Sequences
 * https://leetcode.com/problems/number-of-distinct-roll-sequences/
 * Difficulty: Hard
 *
 * You are given an integer n. You roll a fair 6-sided dice n times. Determine the total number
 * of distinct sequences of rolls possible such that the following conditions are satisfied:
 * 1. The greatest common divisor of any adjacent values in the sequence is equal to 1.
 * 2. There is at least a gap of 2 rolls between equal valued rolls. More formally, if the
 *    value of the ith roll is equal to the value of the jth roll, then abs(i - j) > 2.
 *
 * Return the total number of distinct sequences possible. Since the answer may be very large,
 * return it modulo 109 + 7.
 *
 * Two sequences are considered distinct if at least one element is different.
 */

/**
 * @param {number} n
 * @return {number}
 */
var distinctSequences = function(n) {
  const MOD = 1e9 + 7;
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

  const dp = new Array(n + 1)
    .fill()
    .map(() => new Array(7).fill().map(() => new Array(7).fill(0)));

  for (let i = 1; i <= 6; i++) {
    dp[1][i][0] = 1;
  }

  for (let len = 2; len <= n; len++) {
    for (let curr = 1; curr <= 6; curr++) {
      for (let prev = 0; prev <= 6; prev++) {
        for (let prevPrev = 0; prevPrev <= 6; prevPrev++) {
          if (dp[len - 1][prev][prevPrev] === 0) continue;
          if (curr === prev || curr === prevPrev) continue;
          if (prev !== 0 && gcd(curr, prev) !== 1) continue;
          dp[len][curr][prev] = (dp[len][curr][prev] + dp[len - 1][prev][prevPrev]) % MOD;
        }
      }
    }
  }

  let result = 0;
  for (let curr = 1; curr <= 6; curr++) {
    for (let prev = 0; prev <= 6; prev++) {
      result = (result + dp[n][curr][prev]) % MOD;
    }
  }

  return result;
};
