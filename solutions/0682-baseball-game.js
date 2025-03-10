/**
 * 682. Baseball Game
 * https://leetcode.com/problems/baseball-game/
 * Difficulty: Easy
 *
 * You are keeping the scores for a baseball game with strange rules. At the beginning of the
 * game, you start with an empty record.
 *
 * You are given a list of strings operations, where operations[i] is the ith operation you
 * must apply to the record and is one of the following:
 * - An integer x.
 *   - Record a new score of x.
 * - '+'.
 *   - Record a new score that is the sum of the previous two scores.
 * - 'D'.
 *   - Record a new score that is the double of the previous score.
 * - 'C'.
 *   - Invalidate the previous score, removing it from the record.
 *
 * Return the sum of all the scores on the record after applying all the operations.
 *
 * The test cases are generated such that the answer and all intermediate calculations fit in a
 * 32-bit integer and that all operations are valid.
 */

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const stack = [];

  for (const op of ops) {
    if (op === 'C') stack.pop();
    else if (op === 'D') stack.push(stack.at(-1) * 2);
    else if (op === '+') stack.push(stack.at(-1) + stack.at(-2));
    else stack.push(Number(op));
  }

  return stack.reduce((sum, num) => sum + num, 0);
};
