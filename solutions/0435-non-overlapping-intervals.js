/**
 * 435. Non-overlapping Intervals
 * https://leetcode.com/problems/non-overlapping-intervals/
 * Difficulty: Medium
 *
 * Given an array of intervals intervals where intervals[i] = [starti, endi], return the
 * minimum number of intervals you need to remove to make the rest of the intervals
 * non-overlapping.
 *
 * Note that intervals which only touch at a point are non-overlapping. For example,
 * [1, 2] and [2, 3] are non-overlapping.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  let count = 0;

  intervals.sort((a, b) => a[1] - b[1]);
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (prevEnd > start) count++;
    else prevEnd = end;
  }

  return count;
};
