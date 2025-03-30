/**
 * 986. Interval List Intersections
 * https://leetcode.com/problems/interval-list-intersections/
 * Difficulty: Medium
 *
 * You are given two lists of closed intervals, firstList and secondList, where
 * firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of
 * intervals is pairwise disjoint and in sorted order.
 *
 * Return the intersection of these two interval lists.
 *
 * A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.
 *
 * The intersection of two closed intervals is a set of real numbers that are either empty
 * or represented as a closed interval. For example, the intersection of [1, 3] and
 * [2, 4] is [2, 3].
 */

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < firstList.length && j < secondList.length) {
    const start = Math.max(firstList[i][0], secondList[j][0]);
    const end = Math.min(firstList[i][1], secondList[j][1]);

    if (start <= end) {
      result.push([start, end]);
    }

    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};
