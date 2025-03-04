/**
 * 517. Super Washing Machines
 * https://leetcode.com/problems/super-washing-machines/
 * Difficulty: Hard
 *
 * You have n super washing machines on a line. Initially, each washing machine has some
 * dresses or is empty.
 *
 * For each move, you could choose any m (1 <= m <= n) washing machines, and pass one dress
 * of each washing machine to one of its adjacent washing machines at the same time.
 *
 * Given an integer array machines representing the number of dresses in each washing machine
 * from left to right on the line, return the minimum number of moves to make all the washing
 * machines have the same number of dresses. If it is not possible to do it, return -1.
 */

/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
  const total = machines.reduce((sum, num) => sum + num, 0);
  const target = total / machines.length;
  if (total % machines.length !== 0) return -1;

  let result = 0;
  for (let i = 0, balance = 0; i < machines.length; i++) {
    balance += machines[i] - target;
    result = Math.max(result, Math.abs(balance), machines[i] - target);
  }
  return result;
};
