/**
 * 2655. Find Maximal Uncovered Ranges
 * https://leetcode.com/problems/find-maximal-uncovered-ranges/
 * Difficulty: Medium
 *
 * You are given an integer n which is the length of a 0-indexed array nums, and a 0-indexed
 * 2D-array ranges, which is a list of sub-ranges of nums (sub-ranges may overlap).
 *
 * Each row ranges[i] has exactly 2 cells:
 * - ranges[i][0], which shows the start of the ith range (inclusive)
 * - ranges[i][1], which shows the end of the ith range (inclusive)
 *
 * These ranges cover some cells of nums and leave some cells uncovered. Your task is to find
 * all of the uncovered ranges with maximal length.
 *
 * Return a 2D-array answer of the uncovered ranges, sorted by the starting point in ascending
 * order.
 *
 * By all of the uncovered ranges with maximal length, we mean satisfying two conditions:
 * - Each uncovered cell should belong to exactly one sub-range
 * - There should not exist two ranges (l1, r1) and (l2, r2) such that r1 + 1 = l2
 */

/**
 * @param {number} n
 * @param {number[][]} ranges
 * @return {number[][]}
 */
var findMaximalUncoveredRanges = function(n, ranges) {
  if (ranges.length === 0) return [[0, n - 1]];

  ranges.sort((a, b) => a[0] - b[0]);

  const mergedRanges = [];
  let currentStart = ranges[0][0];
  let currentEnd = ranges[0][1];
  for (let i = 1; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    if (start <= currentEnd + 1) {
      currentEnd = Math.max(currentEnd, end);
    } else {
      mergedRanges.push([currentStart, currentEnd]);
      currentStart = start;
      currentEnd = end;
    }
  }
  mergedRanges.push([currentStart, currentEnd]);

  const result = [];

  if (mergedRanges[0][0] > 0) {
    result.push([0, mergedRanges[0][0] - 1]);
  }

  for (let i = 0; i < mergedRanges.length - 1; i++) {
    const gapStart = mergedRanges[i][1] + 1;
    const gapEnd = mergedRanges[i + 1][0] - 1;
    if (gapStart <= gapEnd) {
      result.push([gapStart, gapEnd]);
    }
  }

  if (mergedRanges[mergedRanges.length - 1][1] < n - 1) {
    result.push([mergedRanges[mergedRanges.length - 1][1] + 1, n - 1]);
  }

  return result;
};
