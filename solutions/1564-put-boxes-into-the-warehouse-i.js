/**
 * 1564. Put Boxes Into the Warehouse I
 * https://leetcode.com/problems/put-boxes-into-the-warehouse-i/
 * Difficulty: Medium
 *
 * You are given two arrays of positive integers, boxes and warehouse, representing the
 * heights of some boxes of unit width and the heights of n rooms in a warehouse respectively.
 * The warehouse's rooms are labelled from 0 to n - 1 from left to right where warehouse[i]
 * (0-indexed) is the height of the ith room.
 *
 * Boxes are put into the warehouse by the following rules:
 * - Boxes cannot be stacked.
 * - You can rearrange the insertion order of the boxes.
 * - Boxes can only be pushed into the warehouse from left to right only.
 * - If the height of some room in the warehouse is less than the height of a box, then that
 *   box and all other boxes behind it will be stopped before that room.
 *
 * Return the maximum number of boxes you can put into the warehouse.
 */

/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function(boxes, warehouse) {
  const effectiveHeights = new Array(warehouse.length);
  effectiveHeights[0] = warehouse[0];

  for (let i = 1; i < warehouse.length; i++) {
    effectiveHeights[i] = Math.min(effectiveHeights[i - 1], warehouse[i]);
  }

  boxes.sort((a, b) => a - b);

  let boxIndex = 0;
  let count = 0;
  for (let i = effectiveHeights.length - 1; i >= 0; i--) {
    if (boxIndex < boxes.length && boxes[boxIndex] <= effectiveHeights[i]) {
      count++;
      boxIndex++;
    }
  }

  return count;
};
