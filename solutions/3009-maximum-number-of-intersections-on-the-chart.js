/**
 * 3009. Maximum Number of Intersections on the Chart
 * https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/
 * Difficulty: Hard
 *
 * There is a line chart consisting of n points connected by line segments. You are given a
 * 1-indexed integer array y. The kth point has coordinates (k, y[k]). There are no horizontal
 * lines; that is, no two consecutive points have the same y-coordinate.
 *
 * We can draw an infinitely long horizontal line. Return the maximum number of points of
 * intersection of the line with the chart.
 */

/**
 * @param {number[]} y
 * @return {number}
 */
var maxIntersectionCount = function(y) {
  const n = y.length;
  const coordinateEvents = new Map();

  for (let segmentIndex = 1; segmentIndex < n; segmentIndex++) {
    const segmentStart = 2 * y[segmentIndex - 1];
    const segmentEnd = 2 * y[segmentIndex]
      + (segmentIndex === n - 1 ? 0 : y[segmentIndex] > y[segmentIndex - 1] ? -1 : 1);
    const intervalStart = Math.min(segmentStart, segmentEnd);
    const intervalEnd = Math.max(segmentStart, segmentEnd);

    coordinateEvents.set(intervalStart, (coordinateEvents.get(intervalStart) || 0) + 1);
    coordinateEvents.set(intervalEnd + 1, (coordinateEvents.get(intervalEnd + 1) || 0) - 1);
  }

  const sortedEvents = [...coordinateEvents.entries()].sort((a, b) => a[0] - b[0]);
  let activeSegments = 0;
  let result = 0;
  for (const [coordinate, segmentChange] of sortedEvents) {
    activeSegments += segmentChange;
    result = Math.max(result, activeSegments);
  }

  return result;
};
