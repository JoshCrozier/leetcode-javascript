/**
 * 1411. Number of Ways to Paint N × 3 Grid
 * https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/
 * Difficulty: Hard
 *
 * You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of
 * the three colors: Red, Yellow, or Green while making sure that no two adjacent cells have the
 * same color (i.e., no two cells that share vertical or horizontal sides have the same color).
 *
 * Given n the number of rows of the grid, return the number of ways you can paint this grid.
 * As the answer may grow large, the answer must be computed modulo 109 + 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
  const MOD = 1000000007n;
  let pattern121 = 6n;
  let pattern123 = 6n;

  for (let row = 2; row <= n; row++) {
    const nextPattern121 = (3n * pattern121 + 2n * pattern123) % MOD;
    const nextPattern123 = (2n * pattern121 + 2n * pattern123) % MOD;
    pattern121 = nextPattern121;
    pattern123 = nextPattern123;
  }

  return Number((pattern121 + pattern123) % MOD);
};
