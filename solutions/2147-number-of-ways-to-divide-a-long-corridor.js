/**
 * 2147. Number of Ways to Divide a Long Corridor
 * https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/
 * Difficulty: Hard
 *
 * Along a long library corridor, there is a line of seats and decorative plants. You are given
 * a 0-indexed string corridor of length n consisting of letters 'S' and 'P' where each 'S'
 * represents a seat and each 'P' represents a plant.
 *
 * One room divider has already been installed to the left of index 0, and another to the right
 * of index n - 1. Additional room dividers can be installed. For each position between indices
 * i - 1 and i (1 <= i <= n - 1), at most one divider can be installed.
 *
 * Divide the corridor into non-overlapping sections, where each section has exactly two seats
 * with any number of plants. There may be multiple ways to perform the division. Two ways are
 * different if there is a position with a room divider installed in the first way but not in
 * the second way.
 *
 * Return the number of ways to divide the corridor. Since the answer may be very large, return
 * it modulo 109 + 7. If there is no way, return 0.
 */

/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
  const MOD = 1e9 + 7;
  let seatCount = 0;
  let result = 1;
  let lastPairEnd = -1;

  for (let i = 0; i < corridor.length; i++) {
    if (corridor[i] === 'S') {
      seatCount++;
    }
  }
  if (seatCount === 0 || seatCount % 2 !== 0) {
    return 0;
  }

  seatCount = 0;

  for (let i = 0; i < corridor.length; i++) {
    if (corridor[i] === 'S') {
      seatCount++;

      if (seatCount % 2 === 0) {
        lastPairEnd = i;
      } else if (seatCount > 1) {
        const plantsCount = i - lastPairEnd - 1;
        result = (result * (plantsCount + 1)) % MOD;
      }
    }
  }

  return result;
};
