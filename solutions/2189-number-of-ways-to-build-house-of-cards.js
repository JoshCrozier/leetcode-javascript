/**
 * 2189. Number of Ways to Build House of Cards
 * https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/
 * Difficulty: Medium
 *
 * You are given an integer n representing the number of playing cards you have. A house of
 * cards meets the following conditions:
 * - A house of cards consists of one or more rows of triangles and horizontal cards.
 * - Triangles are created by leaning two cards against each other.
 * - One card must be placed horizontally between all adjacent triangles in a row.
 * - Any triangle on a row higher than the first must be placed on a horizontal card from the
 *   previous row.
 * - Each triangle is placed in the leftmost available spot in the row.
 *
 * Return the number of distinct house of cards you can build using all n cards. Two houses of
 * cards are considered distinct if there exists a row where the two houses contain a different
 * number of cards.
 */

/**
 * @param {number} n
 * @return {number}
 */
var houseOfCards = function(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 2; i <= n; i += 3) {
    for (let j = n; j >= i; j--) {
      dp[j] += dp[j - i];
    }
  }

  return dp[n];
};
