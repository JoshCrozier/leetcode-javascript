/**
 * 552. Student Attendance Record II
 * https://leetcode.com/problems/student-attendance-record-ii/
 * Difficulty: Hard
 *
 * An attendance record for a student can be represented as a string where each character
 * signifies whether the student was absent, late, or present on that day. The record only
 * contains the following three characters:
 * - 'A': Absent.
 * - 'L': Late.
 * - 'P': Present.
 *
 * Any student is eligible for an attendance award if they meet both of the following
 * criteria:
 * - The student was absent ('A') for strictly fewer than 2 days total.
 * - The student was never late ('L') for 3 or more consecutive days.
 *
 * Given an integer n, return the number of possible attendance records of length n that make
 * a student eligible for an attendance award. The answer may be very large, so return it
 * modulo 109 + 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
  const MOD = 1e9 + 7;
  const dp = [[1, 0, 0], [0, 0, 0]];

  for (let i = 0; i < n; i++) {
    const m = dp.map(row => [...row]);
    dp[0][0] = (m[0][0] + m[0][1] + m[0][2]) % MOD;
    dp[0][1] = m[0][0];
    dp[0][2] = m[0][1];
    dp[1][0] = (m[0][0] + m[0][1] + m[0][2] + m[1][0] + m[1][1] + m[1][2]) % MOD;
    dp[1][1] = m[1][0];
    dp[1][2] = m[1][1];
  }

  return (dp[0][0] + dp[0][1] + dp[0][2] + dp[1][0] + dp[1][1] + dp[1][2]) % MOD;
};
