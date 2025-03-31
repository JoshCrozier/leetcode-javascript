/**
 * 1007. Minimum Domino Rotations For Equal Row
 * https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/
 * Difficulty: Medium
 *
 * In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the
 * ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)
 *
 * We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.
 *
 * Return the minimum number of rotations so that all the values in tops are the same, or all
 * the values in bottoms are the same.
 *
 * If it cannot be done, return -1.
 */

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
  const topResult = countRotations(tops[0]);
  if (topResult !== -1) return topResult;

  return countRotations(bottoms[0]);

  function countRotations(target) {
    let topCount = 0;
    let bottomCount = 0;

    for (let i = 0; i < tops.length; i++) {
      if (tops[i] !== target && bottoms[i] !== target) return -1;
      topCount += tops[i] !== target ? 1 : 0;
      bottomCount += bottoms[i] !== target ? 1 : 0;
    }

    return Math.min(topCount, bottomCount);
  }
};
