/**
 * 1259. Handshakes That Don't Cross
 * https://leetcode.com/problems/handshakes-that-dont-cross/
 * Difficulty: Hard
 *
 * You are given an even number of people numPeople that stand around a circle and each
 * person shakes hands with someone else so that there are numPeople / 2 handshakes total.
 *
 * Return the number of ways these handshakes could occur such that none of the handshakes cross.
 *
 * Since the answer could be very large, return it modulo 109 + 7.
 */

/**
 * @param {number} numPeople
 * @return {number}
 */
var numberOfWays = function(numPeople) {
  const MOD = 1e9 + 7;
  const n = numPeople / 2;
  const dp = new Array(n + 1).fill(0n);
  dp[0] = 1n;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = (dp[i] + dp[j] * dp[i - 1 - j]) % BigInt(MOD);
    }
  }

  return Number(dp[n]);
};
