/**
 * 1580. Put Boxes Into the Warehouse II
 * https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/
 * Difficulty: Medium
 *
 * You are given two arrays of positive integers, boxes and warehouse, representing the heights
 * of some boxes of unit width and the heights of n rooms in a warehouse respectively. The
 * warehouse's rooms are labeled from 0 to n - 1 from left to right where warehouse[i] (0-indexed)
 * is the height of the ith room.
 *
 * Boxes are put into the warehouse by the following rules:
 * - Boxes cannot be stacked.
 * - You can rearrange the insertion order of the boxes.
 * - Boxes can be pushed into the warehouse from either side (left or right)
 * - If the height of some room in the warehouse is less than the height of a box, then that box
 *   and all other boxes behind it will be stopped before that room.
 *
 * Return the maximum number of boxes you can put into the warehouse.
 */

/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function(boxes, warehouse) {
  boxes.sort((a, b) => a - b);

  let leftPointer = 0;
  let rightPointer = warehouse.length - 1;
  let leftMaxHeight = warehouse[0];
  let rightMaxHeight = warehouse[warehouse.length - 1];
  let result = 0;

  while (result < warehouse.length && leftPointer <= rightPointer && boxes.length > 0) {
    while (boxes.length > 0 && boxes[boxes.length - 1] > leftMaxHeight
          && boxes[boxes.length - 1] > rightMaxHeight) {
      boxes.pop();
    }

    if (boxes.length === 0) break;

    const canFitLeft = boxes[boxes.length - 1] <= leftMaxHeight;
    const canFitRight = boxes[boxes.length - 1] <= rightMaxHeight;

    if (canFitLeft && (!canFitRight || leftMaxHeight <= rightMaxHeight)) {
      boxes.pop();
      leftPointer++;
      result++;
      if (leftPointer < warehouse.length) {
        leftMaxHeight = Math.min(warehouse[leftPointer], leftMaxHeight);
      }
    } else if (canFitRight) {
      boxes.pop();
      rightPointer--;
      result++;
      if (rightPointer >= 0) {
        rightMaxHeight = Math.min(warehouse[rightPointer], rightMaxHeight);
      }
    } else {
      break;
    }
  }

  return result;
};
