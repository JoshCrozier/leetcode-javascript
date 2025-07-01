/**
 * 1272. Remove Interval
 * https://leetcode.com/problems/remove-interval/
 * Difficulty: Medium
 *
 * A set of real numbers can be represented as the union of several disjoint intervals,
 * where each interval is in the form [a, b). A real number x is in the set if one of
 * its intervals [a, b) contains x (i.e. a <= x < b).
 *
 * You are given a sorted list of disjoint intervals intervals representing a set of
 * real numbers as described above, where intervals[i] = [ai, bi] represents the interval
 * [ai, bi). You are also given another interval toBeRemoved.
 *
 * Return the set of real numbers with the interval toBeRemoved removed from intervals.
 * In other words, return the set of real numbers such that every x in the set is in
 * intervals but not in toBeRemoved. Your answer should be a sorted list of disjoint
 * intervals as described above.
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function(intervals, toBeRemoved) {
  const result = [];
  const [removeStart, removeEnd] = toBeRemoved;

  for (const [start, end] of intervals) {
    if (end <= removeStart || start >= removeEnd) {
      result.push([start, end]);
    } else {
      if (start < removeStart) {
        result.push([start, removeStart]);
      }
      if (end > removeEnd) {
        result.push([removeEnd, end]);
      }
    }
  }

  return result;
};
