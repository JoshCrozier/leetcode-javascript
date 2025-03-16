/**
 * 808. Soup Servings
 * https://leetcode.com/problems/soup-servings/
 * Difficulty: Medium
 *
 * There are two types of soup: type A and type B. Initially, we have n ml of each type of soup.
 * There are four kinds of operations:
 * 1. Serve 100 ml of soup A and 0 ml of soup B,
 * 2. Serve 75 ml of soup A and 25 ml of soup B,
 * 3. Serve 50 ml of soup A and 50 ml of soup B, and
 * 4. Serve 25 ml of soup A and 75 ml of soup B.
 *
 * When we serve some soup, we give it to someone, and we no longer have it. Each turn, we will
 * choose from the four operations with an equal probability 0.25. If the remaining volume of
 * soup is not enough to complete the operation, we will serve as much as possible. We stop once
 * we no longer have some quantity of both types of soup.
 *
 * Note that we do not have an operation where all 100 ml's of soup B are used first.
 *
 * Return the probability that soup A will be empty first, plus half the probability that A and B
 * become empty at the same time. Answers within 10-5 of the actual answer will be accepted.
 */

/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
  if (n >= 4800) return 1.0;

  n = Math.ceil(n / 25);
  const memo = new Map();

  function calculateProbability(a, b) {
    if (a <= 0 && b <= 0) return 0.5;
    if (a <= 0) return 1.0;
    if (b <= 0) return 0.0;

    const key = a * 10000 + b;
    if (memo.has(key)) return memo.get(key);

    const probability = 0.25 * (
      calculateProbability(a - 4, b) + calculateProbability(a - 3, b - 1)
      + calculateProbability(a - 2, b - 2) + calculateProbability(a - 1, b - 3)
    );

    memo.set(key, probability);
    return probability;
  }

  return calculateProbability(n, n);
};
