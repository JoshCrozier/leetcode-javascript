/**
 * 948. Bag of Tokens
 * https://leetcode.com/problems/bag-of-tokens/
 * Difficulty: Medium
 *
 * You start with an initial power of power, an initial score of 0, and a bag of tokens given as
 * an integer array tokens, where each tokens[i] denotes the value of tokeni.
 *
 * Your goal is to maximize the total score by strategically playing these tokens. In one move,
 * you can play an unplayed token in one of the two ways (but not both for the same token):
 * - Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i]
 *   power and gaining 1 score.
 * - Face-down: If your current score is at least 1, you may play tokeni, gaining tokens[i] power
 *   and losing 1 score.
 *
 * Return the maximum possible score you can achieve after playing any number of tokens.
 */

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
  let score = 0;
  let result = 0;
  let left = 0;
  let right = tokens.length - 1;

  tokens.sort((a, b) => a - b);

  while (left <= right && (power >= tokens[left] || score > 0)) {
    while (left <= right && power >= tokens[left]) {
      power -= tokens[left];
      score++;
      left++;
    }
    result = Math.max(result, score);

    if (left <= right && score > 0) {
      power += tokens[right];
      score--;
      right--;
    }
  }

  return result;
};
