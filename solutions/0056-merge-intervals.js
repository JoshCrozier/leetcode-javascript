/**
 * 56. Merge Intervals
 * https://leetcode.com/problems/merge-intervals/
 * Difficulty: Medium
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all
 * overlapping intervals, and return an array of the non-overlapping intervals
 * that cover all the intervals in the input.
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort(([a], [b]) => a - b);

  const result = [intervals.shift()];
  intervals.forEach(([first, second]) => {
    const [, last] = result[result.length - 1];
    if (first <= last) {
      result[result.length - 1][1] = Math.max(second, last);
    } else {
      result.push([first, second]);
    }
  });

  return result;
};
