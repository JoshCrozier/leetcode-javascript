/**
 * 1288. Remove Covered Intervals
 * https://leetcode.com/problems/remove-covered-intervals/
 * Difficulty: Medium
 *
 * Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove
 * all intervals that are covered by another interval in the list.
 *
 * The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.
 *
 * Return the number of remaining intervals.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let result = 1;
  let currentEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][1] > currentEnd) {
      result++;
      currentEnd = intervals[i][1];
    }
  }

  return result;
};
