/**
 * 2766. Relocate Marbles
 * https://leetcode.com/problems/relocate-marbles/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums representing the initial positions of some
 * marbles. You are also given two 0-indexed integer arrays moveFrom and moveTo of equal length.
 *
 * Throughout moveFrom.length steps, you will change the positions of the marbles. On the ith
 * step, you will move all marbles at position moveFrom[i] to position moveTo[i].
 *
 * After completing all the steps, return the sorted list of occupied positions.
 *
 * Notes:
 * - We call a position occupied if there is at least one marble in that position.
 * - There may be multiple marbles in a single position.
 */

/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function(nums, moveFrom, moveTo) {
  const set = new Set(nums);

  for (let i = 0; i < moveFrom.length; i++) {
    set.delete(moveFrom[i]);
    set.add(moveTo[i]);
  }

  return [...set].sort((a, b) => a - b);
};
