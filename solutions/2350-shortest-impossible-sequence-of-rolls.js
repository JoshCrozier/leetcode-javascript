/**
 * 2350. Shortest Impossible Sequence of Rolls
 * https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/
 * Difficulty: Hard
 *
 * You are given an integer array rolls of length n and an integer k. You roll a k sided dice
 * numbered from 1 to k, n times, where the result of the ith roll is rolls[i].
 *
 * Return the length of the shortest sequence of rolls so that there's no such subsequence in rolls.
 *
 * A sequence of rolls of length len is the result of rolling a k sided dice len times.
 */

/**
 * @param {number[]} rolls
 * @param {number} k
 * @return {number}
 */
var shortestSequence = function(rolls, k) {
  const set = new Set();
  let sequences = 0;

  for (const roll of rolls) {
    set.add(roll);
    if (set.size === k) {
      sequences++;
      set.clear();
    }
  }

  return sequences + 1;
};
