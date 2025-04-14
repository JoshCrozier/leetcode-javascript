/**
 * 1444. Number of Ways of Cutting a Pizza
 * https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/
 * Difficulty: Hard
 *
 * Given a rectangular pizza represented as a rows x cols matrix containing the following
 * characters: 'A' (an apple) and '.' (empty cell) and given the integer k. You have to cut
 * the pizza into k pieces using k-1 cuts.
 *
 * For each cut you choose the direction: vertical or horizontal, then you choose a cut
 * position at the cell boundary and cut the pizza into two pieces. If you cut the pizza
 * vertically, give the left part of the pizza to a person. If you cut the pizza horizontally,
 * give the upper part of the pizza to a person. Give the last piece of pizza to the last person.
 *
 * Return the number of ways of cutting the pizza such that each piece contains at least one apple.
 * Since the answer can be a huge number, return this modulo 10^9 + 7.
 */

/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
  const MOD = 1e9 + 7;
  const rows = pizza.length;
  const cols = pizza[0].length;
  const appleCount = new Array(rows + 1).fill().map(() => new Array(cols + 1).fill(0));
  const dpCache = new Array(rows + 1).fill().map(() =>
    new Array(cols + 1).fill().map(() => new Array(k + 1).fill(-1))
  );

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      appleCount[i][j] = (pizza[i][j] === 'A' ? 1 : 0)
        + appleCount[i + 1][j] + appleCount[i][j + 1] - appleCount[i + 1][j + 1];
    }
  }

  return countWays(0, 0, k - 1);

  function countWays(row, col, cutsLeft) {
    if (appleCount[row][col] === 0) return 0;
    if (cutsLeft === 0) return 1;
    if (dpCache[row][col][cutsLeft] !== -1) return dpCache[row][col][cutsLeft];

    let result = 0;

    for (let i = row + 1; i < rows; i++) {
      if (appleCount[row][col] - appleCount[i][col] > 0) {
        result = (result + countWays(i, col, cutsLeft - 1)) % MOD;
      }
    }

    for (let j = col + 1; j < cols; j++) {
      if (appleCount[row][col] - appleCount[row][j] > 0) {
        result = (result + countWays(row, j, cutsLeft - 1)) % MOD;
      }
    }

    dpCache[row][col][cutsLeft] = result;
    return result;
  }
};
