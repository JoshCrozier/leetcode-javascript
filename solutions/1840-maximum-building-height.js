/**
 * 1840. Maximum Building Height
 * https://leetcode.com/problems/maximum-building-height/
 * Difficulty: Hard
 *
 * You want to build n new buildings in a city. The new buildings will be built in a line
 * and are labeled from 1 to n.
 *
 * However, there are city restrictions on the heights of the new buildings:
 * - The height of each building must be a non-negative integer.
 * - The height of the first building must be 0.
 * - The height difference between any two adjacent buildings cannot exceed 1.
 *
 * Additionally, there are city restrictions on the maximum height of specific buildings.
 * These restrictions are given as a 2D integer array restrictions where
 * restrictions[i] = [idi, maxHeighti] indicates that building idi must have a height
 * less than or equal to maxHeighti.
 *
 * It is guaranteed that each building will appear at most once in restrictions, and building
 * 1 will not be in restrictions.
 *
 * Return the maximum possible height of the tallest building.
 */

/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {
  restrictions.push([1, 0], [n, n - 1]);
  restrictions.sort((a, b) => a[0] - b[0]);

  const length = restrictions.length;

  for (let i = 1; i < length; i++) {
    const [currId, currHeight] = restrictions[i];
    const [prevId, prevHeight] = restrictions[i - 1];
    restrictions[i][1] = Math.min(currHeight, prevHeight + (currId - prevId));
  }

  for (let i = length - 2; i >= 0; i--) {
    const [currId, currHeight] = restrictions[i];
    const [nextId, nextHeight] = restrictions[i + 1];
    restrictions[i][1] = Math.min(currHeight, nextHeight + (nextId - currId));
  }

  let maxHeight = 0;

  for (let i = 1; i < length; i++) {
    const [leftId, leftHeight] = restrictions[i - 1];
    const [rightId, rightHeight] = restrictions[i];
    const distance = rightId - leftId;
    const heightDiff = Math.abs(rightHeight - leftHeight);
    const peakHeight = Math.max(leftHeight, rightHeight) + Math.floor((distance - heightDiff) / 2);
    maxHeight = Math.max(maxHeight, peakHeight);
  }

  return maxHeight;
};
