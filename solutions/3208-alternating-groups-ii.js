/**
 * 3208. Alternating Groups II
 * https://leetcode.com/problems/alternating-groups-ii/
 * Difficulty: Medium
 *
 * There is a circle of red and blue tiles. You are given an array of integers colors and
 * an integer k. The color of tile i is represented by colors[i]:
 * - colors[i] == 0 means that tile i is red.
 *  -colors[i] == 1 means that tile i is blue.
 *
 * An alternating group is every k contiguous tiles in the circle with alternating colors
 * (each tile in the group except the first and last one has a different color from its
 * left and right tiles).
 *
 * Return the number of alternating groups.
 *
 * Note that since colors represents a circle, the first and the last tiles are considered
 * to be next to each other.
 */

/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
  const extended = colors.concat(colors.slice(0, k - 1));
  let result = 0;
  let invalid = 0;

  for (let i = 1; i < k; i++) {
    if (extended[i] === extended[i - 1]) {
      invalid++;
    }
  }
  if (invalid === 0) {
    result++;
  }
  for (let i = 1; i < colors.length; i++) {
    if (extended[i] === extended[i - 1]) invalid--;
    if (extended[i + k - 1] === extended[i + k - 2]) invalid++;
    if (invalid === 0) result++;
  }

  return result;
};
