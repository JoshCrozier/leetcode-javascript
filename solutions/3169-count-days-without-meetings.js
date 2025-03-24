/**
 * 3169. Count Days Without Meetings
 * https://leetcode.com/problems/count-days-without-meetings/
 * Difficulty: Medium
 *
 * You are given a positive integer days representing the total number of days an employee is
 * available for work (starting from day 1). You are also given a 2D array meetings of size n
 * where, meetings[i] = [start_i, end_i] represents the starting and ending days of meeting
 * i (inclusive).
 *
 * Return the count of days when the employee is available for work but no meetings are scheduled.
 *
 * Note: The meetings may overlap.
 */

/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);

  let result = 0;
  let currentEnd = 0;

  for (const [start, end] of meetings) {
    if (start > currentEnd + 1) {
      result += start - currentEnd - 1;
    }
    currentEnd = Math.max(currentEnd, end);
  }

  if (currentEnd < days) {
    result += days - currentEnd;
  }

  return result;
};
