/**
 * 1739. Building Boxes
 * https://leetcode.com/problems/building-boxes/
 * Difficulty: Hard
 *
 * You have a cubic storeroom where the width, length, and height of the room are all equal to n
 * units. You are asked to place n boxes in this room where each box is a cube of unit side
 * length. There are however some rules to placing the boxes:
 * - You can place the boxes anywhere on the floor.
 * - If box x is placed on top of the box y, then each side of the four vertical sides of the box
 *   y must either be adjacent to another box or to a wall.
 *
 * Given an integer n, return the minimum possible number of boxes touching the floor.
 */

/**
 * @param {number} n
 * @return {number}
 */
var minimumBoxes = function(n) {
  if (n < 4) return n;

  let baseSize = 0;
  let totalBoxes = 0;
  const triangular = k => k * (k + 1) / 2;

  while (totalBoxes + triangular(baseSize + 1) <= n) {
    baseSize++;
    totalBoxes += triangular(baseSize);
  }

  const remaining = n - totalBoxes;
  let extraFloor = 0;

  while (triangular(extraFloor) < remaining) extraFloor++;

  return triangular(baseSize) + extraFloor;
};
