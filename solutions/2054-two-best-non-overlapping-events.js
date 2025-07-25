/**
 * 2054. Two Best Non-Overlapping Events
 * https://leetcode.com/problems/two-best-non-overlapping-events/
 * Difficulty: Medium
 *
 * You are given a 0-indexed 2D integer array of events where
 * events[i] = [startTimei, endTimei, valuei]. The ith event starts at
 * startTimei and ends at endTimei, and if you attend this event, you will
 * receive a value of valuei. You can choose at most two non-overlapping
 * events to attend such that the sum of their values is maximized.
 *
 * Return this maximum sum.
 *
 * Note that the start time and end time is inclusive: that is, you cannot
 * attend two events where one of them starts and the other ends at the
 * same time. More specifically, if you attend an event with end time t,
 * the next event must start at or after t + 1.
 */

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
  events.sort((a, b) => a[1] - b[1]);

  const maxValueUpTo = new Array(events.length);
  maxValueUpTo[0] = events[0][2];

  for (let i = 1; i < events.length; i++) {
    maxValueUpTo[i] = Math.max(maxValueUpTo[i - 1], events[i][2]);
  }

  let result = 0;
  for (let i = 0; i < events.length; i++) {
    const [start, end, value] = events[i];
    result = Math.max(result, value);

    let left = 0;
    let right = i - 1;
    let bestIndex = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (events[mid][1] < start) {
        bestIndex = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (bestIndex !== -1) {
      result = Math.max(result, value + maxValueUpTo[bestIndex]);
    }
  }

  return result;
};
