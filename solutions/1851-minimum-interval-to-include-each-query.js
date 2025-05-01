/**
 * 1851. Minimum Interval to Include Each Query
 * https://leetcode.com/problems/minimum-interval-to-include-each-query/
 * Difficulty: Hard
 *
 * You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes
 * the ith interval starting at lefti and ending at righti (inclusive). The size of an interval
 * is defined as the number of integers it contains, or more formally righti - lefti + 1.
 *
 * You are also given an integer array queries. The answer to the jth query is the size of the
 * smallest interval i such that lefti <= queries[j] <= righti. If no such interval exists,
 * the answer is -1.
 *
 * Return an array containing the answers to the queries.
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
  intervals.sort((a, b) => a[0] - b[0]);
  const sortedQueries = queries
    .map((q, i) => [q, i])
    .sort((a, b) => a[0] - b[0]);

  const activeIntervals = new PriorityQueue((a, b) => a[0] - b[0]);
  const result = new Array(queries.length).fill(-1);
  let intervalIndex = 0;

  for (const [queryValue, queryIndex] of sortedQueries) {
    while (intervalIndex < intervals.length && intervals[intervalIndex][0] <= queryValue) {
      const [start, end] = intervals[intervalIndex];
      activeIntervals.enqueue([end - start + 1, end]);
      intervalIndex++;
    }

    while (!activeIntervals.isEmpty() && activeIntervals.front()?.[1] < queryValue) {
      activeIntervals.dequeue();
    }

    if (!activeIntervals.isEmpty()) {
      result[queryIndex] = activeIntervals.front()[0];
    }
  }

  return result;
};
