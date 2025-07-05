/**
 * 1762. Buildings With an Ocean View
 * https://leetcode.com/problems/buildings-with-an-ocean-view/
 * Difficulty: Medium
 *
 * There are n buildings in a line. You are given an integer array heights of size n that
 * represents the heights of the buildings in the line.
 *
 * The ocean is to the right of the buildings. A building has an ocean view if the building
 * can see the ocean without obstructions. Formally, a building has an ocean view if all the
 * buildings to its right have a smaller height.
 *
 * Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in
 * increasing order.
 */

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
  const result = [];
  let maxHeightFromRight = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > maxHeightFromRight) {
      result.push(i);
      maxHeightFromRight = heights[i];
    }
  }

  return result.reverse();
};
