/**
 * 935. Knight Dialer
 * https://leetcode.com/problems/knight-dialer/
 * Difficulty: Medium
 *
 * The chess knight has a unique movement, it may move two squares vertically and one square
 * horizontally, or two squares horizontally and one square vertically (with both forming
 * the shape of an L). The possible movements of chess knight are shown in this diagram:
 *
 * A chess knight can move as indicated in the chess diagram below.
 *
 * We have a chess knight and a phone pad as shown below, the knight can only stand on a
 * numeric cell (i.e. blue cell).
 *
 * Given an integer n, return how many distinct phone numbers of length n we can dial.
 *
 * You are allowed to place the knight on any numeric cell initially and then you should
 * perform n - 1 jumps to dial a number of length n. All jumps should be valid knight jumps.
 *
 * As the answer may be very large, return the answer modulo 109 + 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
  const MOD = 1e9 + 7;
  const moves = [
    [4, 6], [6, 8], [7, 9], [4, 8],
    [0, 3, 9], [], [0, 1, 7], [2, 6],
    [1, 3], [2, 4]
  ];
  let prevCounts = new Array(10).fill(1);

  for (let jump = 1; jump < n; jump++) {
    const currCounts = new Array(10).fill(0);
    for (let digit = 0; digit < 10; digit++) {
      for (const nextDigit of moves[digit]) {
        currCounts[nextDigit] = (currCounts[nextDigit] + prevCounts[digit]) % MOD;
      }
    }
    prevCounts = currCounts;
  }

  return prevCounts.reduce((sum, count) => (sum + count) % MOD, 0);
};
