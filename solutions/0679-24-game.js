/**
 * 679. 24 Game
 * https://leetcode.com/problems/24-game/
 * Difficulty: Hard
 *
 * You are given an integer array cards of length 4. You have four cards, each containing a number
 * in the range [1, 9]. You should arrange the numbers on these cards in a mathematical expression
 * using the operators ['+', '-', '*', '/'] and the parentheses '(' and ')' to get the value 24.
 *
 * You are restricted with the following rules:
 * - The division operator '/' represents real division, not integer division.
 *   - For example, 4 / (1 - 2 / 3) = 4 / (1 / 3) = 12.
 * - Every operation done is between two numbers. In particular, we cannot use '-' as a
 *   unary operator.
 *   - For example, if cards = [1, 1, 1, 1], the expression "-1 - 1 - 1 - 1" is not allowed.
 * - You cannot concatenate numbers together
 *   - For example, if cards = [1, 2, 1, 2], the expression "12 + 12" is not valid.
 *
 * Return true if you can get such expression that evaluates to 24, and false otherwise.
 */

/**
 * @param {number[]} cards
 * @return {boolean}
 */
const judgePoint24 = function(cards) {
  if (cards.length === 1) return Math.abs(cards[0] - 24) < 0.1;

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      const remaining = new Array(cards.length - 1);
      for (let index = 0, current = 0; current < cards.length; current++) {
        if (i === current || j === current) continue;
        remaining[index++] = cards[current];
      }
      const a = cards[i];
      const b = cards[j];
      const operations = [a + b, a - b, b - a, a * b, a / b, b / a];
      for (const result of operations) {
        if (result === 0) continue;
        remaining[cards.length - 2] = result;
        if (judgePoint24(remaining)) return true;
      }
    }
  }

  return false;
};
