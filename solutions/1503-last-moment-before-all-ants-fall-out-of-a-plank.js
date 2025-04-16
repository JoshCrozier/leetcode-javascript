/**
 * 1503. Last Moment Before All Ants Fall Out of a Plank
 * https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/
 * Difficulty: Medium
 *
 * We have a wooden plank of the length n units. Some ants are walking on the plank, each ant moves
 * with a speed of 1 unit per second. Some of the ants move to the left, the other move to the
 * right.
 *
 * When two ants moving in two different directions meet at some point, they change their directions
 * and continue moving again. Assume changing directions does not take any additional time.
 *
 * When an ant reaches one end of the plank at a time t, it falls out of the plank immediately.
 *
 * Given an integer n and two integer arrays left and right, the positions of the ants moving to the
 * left and the right, return the moment when the last ant(s) fall out of the plank.
 */

/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
  let result = 0;

  for (const pos of left) {
    result = Math.max(result, pos);
  }
  for (const pos of right) {
    result = Math.max(result, n - pos);
  }

  return result;
};
