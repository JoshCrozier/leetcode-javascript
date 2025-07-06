/**
 * 2015. Average Height of Buildings in Each Segment
 * https://leetcode.com/problems/average-height-of-buildings-in-each-segment/
 * Difficulty: Medium
 *
 * A perfectly straight street is represented by a number line. The street has building(s) on
 * it and is represented by a 2D integer array buildings, where buildings[i] = [starti, endi,
 * heighti]. This means that there is a building with heighti in the half-closed
 * segment [starti, endi).
 *
 * You want to describe the heights of the buildings on the street with the minimum number of
 * non-overlapping segments. The street can be represented by the 2D integer array street
 * where street[j] = [leftj, rightj, averagej] describes a half-closed segment [leftj, rightj)
 * of the road where the average heights of the buildings in the segment is averagej.
 *
 * - For example, if buildings = [[1,5,2],[3,10,4]], the street could be represented by
 *   street = [[1,3,2],[3,5,3],[5,10,4]] because:
 *   - From 1 to 3, there is only the first building with an average height of 2 / 1 = 2.
 *   - From 3 to 5, both the first and the second building are there with an average height
 *     of (2+4) / 2 = 3.
 *   - From 5 to 10, there is only the second building with an average height of 4 / 1 = 4.
 *
 * Given buildings, return the 2D integer array street as described above (excluding any areas
 * of the street where there are no buldings). You may return the array in any order.
 *
 * The average of n elements is the sum of the n elements divided (integer division) by n.
 *
 * A half-closed segment [a, b) is the section of the number line between points a and b including
 * point a and not including point b.
 */

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var averageHeightOfBuildings = function(buildings) {
  const events = [];

  for (const [start, end, height] of buildings) {
    events.push([start, height, 1]);
    events.push([end, -height, -1]);
  }

  events.sort((a, b) => a[0] - b[0] || a[2] - b[2]);

  const result = [];
  let currentSum = 0;
  let currentCount = 0;
  let prevPos = -1;

  for (const [pos, height, delta] of events) {
    if (currentCount > 0 && pos > prevPos) {
      const avgHeight = Math.floor(currentSum / currentCount);

      if (result.length > 0 && result[result.length - 1][1] === prevPos
          && result[result.length - 1][2] === avgHeight) {
        result[result.length - 1][1] = pos;
      } else {
        result.push([prevPos, pos, avgHeight]);
      }
    }

    currentSum += height;
    currentCount += delta;
    prevPos = pos;
  }

  return result;
};
