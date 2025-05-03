/**
 * 1931. Painting a Grid With Three Different Colors
 * https://leetcode.com/problems/painting-a-grid-with-three-different-colors/
 * Difficulty: Hard
 *
 * You are given two integers m and n. Consider an m x n grid where each cell is initially white.
 * You can paint each cell red, green, or blue. All cells must be painted.
 *
 * Return the number of ways to color the grid with no two adjacent cells having the same color.
 * Since the answer can be very large, return it modulo 109 + 7.
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function(m, n) {
  const MOD = 1e9 + 7;
  const colors = 3;
  const validStates = generateValidStates(m, colors);
  const stateCount = validStates.length;
  let dp = new Array(stateCount).fill(1);

  for (let col = 1; col < n; col++) {
    const nextDp = new Array(stateCount).fill(0);
    for (let i = 0; i < stateCount; i++) {
      for (let j = 0; j < stateCount; j++) {
        if (isCompatible(validStates[i], validStates[j])) {
          nextDp[j] = (nextDp[j] + dp[i]) % MOD;
        }
      }
    }
    dp = nextDp;
  }

  let totalWays = 0;
  for (const count of dp) {
    totalWays = (totalWays + count) % MOD;
  }

  return totalWays;

  function generateValidStates(rows, colors) {
    const states = [];
    generateStates([], rows, colors, states);
    return states;
  }

  function generateStates(current, rows, colors, states) {
    if (current.length === rows) {
      states.push([...current]);
      return;
    }
    for (let c = 0; c < colors; c++) {
      if (current.length === 0 || current[current.length - 1] !== c) {
        current.push(c);
        generateStates(current, rows, colors, states);
        current.pop();
      }
    }
  }

  function isCompatible(prevState, currState) {
    for (let i = 0; i < prevState.length; i++) {
      if (prevState[i] === currState[i]) {
        return false;
      }
    }
    return true;
  }
};
