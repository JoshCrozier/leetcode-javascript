/**
 * 1223. Dice Roll Simulation
 * https://leetcode.com/problems/dice-roll-simulation/
 * Difficulty: Hard
 *
 * A die simulator generates a random number from 1 to 6 for each roll. You introduced a constraint
 * to the generator such that it cannot roll the number i more than rollMax[i] (1-indexed)
 * consecutive times.
 *
 * Given an array of integers rollMax and an integer n, return the number of distinct sequences
 * that can be obtained with exact n rolls. Since the answer may be too large, return it modulo
 * 1e9 + 7.
 *
 * Two sequences are considered different if at least one element differs from each other.
 */

/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
  const MOD = 1e9 + 7;
  const faces = 6;

  const dp = new Array(n + 1).fill().map(() => new Array(faces).fill(0));
  for (let face = 0; face < faces; face++) {
    dp[1][face] = 1;
  }

  for (let rolls = 2; rolls <= n; rolls++) {
    for (let face = 0; face < faces; face++) {
      const maxConsecutive = Math.min(rolls, rollMax[face]);
      let sequences = 0;

      for (let streak = 1; streak <= maxConsecutive; streak++) {
        if (streak === rolls) {
          sequences = (sequences + 1) % MOD;
        } else {
          let prevCombinations = 0;
          for (let prevFace = 0; prevFace < faces; prevFace++) {
            if (prevFace !== face) {
              prevCombinations = (prevCombinations + dp[rolls - streak][prevFace]) % MOD;
            }
          }
          sequences = (sequences + prevCombinations) % MOD;
        }
      }
      dp[rolls][face] = sequences;
    }
  }

  let result = 0;
  for (let face = 0; face < faces; face++) {
    result = (result + dp[n][face]) % MOD;
  }

  return result;
};
