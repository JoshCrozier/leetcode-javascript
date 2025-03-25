/**
 * 3394. Check if Grid can be Cut into Sections
 * https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/
 * Difficulty: Medium
 *
 * You are given an integer n representing the dimensions of an n x n grid, with the origin at the
 * bottom-left corner of the grid. You are also given a 2D array of coordinates rectangles, where
 * rectangles[i] is in the form [startx, starty, endx, endy], representing a rectangle on the grid.
 * Each rectangle is defined as follows:
 * - (startx, starty): The bottom-left corner of the rectangle.
 * - (endx, endy): The top-right corner of the rectangle.
 *
 * Note that the rectangles do not overlap. Your task is to determine if it is possible to make
 * either two horizontal or two vertical cuts on the grid such that:
 * - Each of the three resulting sections formed by the cuts contains at least one rectangle.
 * - Every rectangle belongs to exactly one section.
 *
 * Return true if such cuts can be made; otherwise, return false.
 */

/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function(n, rectangles) {
  return canPartition(rectangles.map(r => [r[0], r[2]]))
    || canPartition(rectangles.map(r => [r[1], r[3]]));
};

function canPartition(intervals, cuts = 0) {
  intervals.sort(([start1, end1], [start2, end2]) => start1 - start2 || end2 - end1);
  let maxReach = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= maxReach && ++cuts === 2) return true;
    maxReach = Math.max(intervals[i][1], maxReach);
  }
  return false;
}
