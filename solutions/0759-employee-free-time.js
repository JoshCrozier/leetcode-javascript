/**
 * 759. Employee Free Time
 * https://leetcode.com/problems/employee-free-time/
 * Difficulty: Hard
 *
 * We are given a list schedule of employees, which represents the working time for each employee.
 *
 * Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.
 *
 * Return the list of finite intervals representing common, positive-length free time for all
 * employees, also in sorted order.
 *
 * (Even though we are representing Intervals in the form [x, y], the objects inside are Intervals,
 * not lists or arrays. For example, schedule[0][0].start = 1, schedule[0][0].end = 2, and
 * schedule[0][0][0] is not defined).  Also, we wouldn't include intervals like [5, 5] in our
 * answer, as they have zero length.
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(schedule) {
  const allIntervals = [];

  for (const employee of schedule) {
    for (const interval of employee) {
      allIntervals.push(interval);
    }
  }

  allIntervals.sort((a, b) => a.start - b.start);

  const merged = [];
  for (const interval of allIntervals) {
    if (merged.length === 0 || merged[merged.length - 1].end < interval.start) {
      merged.push(interval);
    } else {
      merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, interval.end);
    }
  }

  const result = [];
  for (let i = 0; i < merged.length - 1; i++) {
    if (merged[i].end < merged[i + 1].start) {
      result.push(new Interval(merged[i].end, merged[i + 1].start));
    }
  }

  return result;
};
