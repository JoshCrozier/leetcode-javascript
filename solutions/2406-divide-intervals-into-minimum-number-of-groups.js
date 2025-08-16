/**
 * 2406. Divide Intervals Into Minimum Number of Groups
 * https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/
 * Difficulty: Medium
 *
 * You are given a 2D integer array intervals where intervals[i] = [lefti, righti] represents
 * the inclusive interval [lefti, righti].
 *
 * You have to divide the intervals into one or more groups such that each interval is in
 * exactly one group, and no two intervals that are in the same group intersect each other.
 *
 * Return the minimum number of groups you need to make.
 *
 * Two intervals intersect if there is at least one common number between them. For example,
 * the intervals [1, 5] and [5, 8] intersect.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
  const events = [];
  for (const [start, end] of intervals) {
    events.push([start, 1]);
    events.push([end + 1, -1]);
  }

  events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

  let activeIntervals = 0;
  let result = 0;
  for (const [time, change] of events) {
    activeIntervals += change;
    result = Math.max(result, activeIntervals);
  }

  return result;
};
