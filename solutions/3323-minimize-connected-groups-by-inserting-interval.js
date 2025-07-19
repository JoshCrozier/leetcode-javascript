/**
 * 3323. Minimize Connected Groups by Inserting Interval
 * https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/
 * Difficulty: Medium
 *
 * You are given a 2D array intervals, where intervals[i] = [starti, endi] represents the
 * start and the end of interval i. You are also given an integer k.
 *
 * You must add exactly one new interval [startnew, endnew] to the array such that:
 * - The length of the new interval, endnew - startnew, is at most k.
 * - After adding, the number of connected groups in intervals is minimized.
 *
 * A connected group of intervals is a maximal collection of intervals that, when considered
 * together, cover a continuous range from the smallest point to the largest point with no gaps
 * between them. Here are some examples:
 * - A group of intervals [[1, 2], [2, 5], [3, 3]] is connected because together they cover the
 *   range from 1 to 5 without any gaps.
 * - However, a group of intervals [[1, 2], [3, 4]] is not connected because the segment (2, 3)
 *   is not covered.
 *
 * Return the minimum number of connected groups after adding exactly one new interval to the array.
 */

/**
 * @param {number[][]} intervals
 * @param {number} k
 * @return {number}
 */
var minConnectedGroups = function(intervals, k) {
  intervals.sort((a, b) => a[0] - b[0]);

  const groupStarts = [intervals[0][0]];
  const groupEnds = [intervals[0][1]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start > groupEnds[groupEnds.length - 1]) {
      groupStarts.push(start);
      groupEnds.push(end);
    } else if (start <= groupEnds[groupEnds.length - 1] && groupEnds[groupEnds.length - 1] < end) {
      groupEnds[groupEnds.length - 1] = end;
    }
  }

  let maxGroupsToMerge = 0;
  for (let i = 0; i < groupEnds.length; i++) {
    const searchTarget = groupEnds[i] + k + 1;
    const rightmostIndex = binarySearchLeft(groupStarts, searchTarget) - 1;
    const groupsCanReach = rightmostIndex - i;
    maxGroupsToMerge = Math.max(maxGroupsToMerge, groupsCanReach);
  }

  return groupStarts.length - maxGroupsToMerge;

  function binarySearchLeft(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }
};
