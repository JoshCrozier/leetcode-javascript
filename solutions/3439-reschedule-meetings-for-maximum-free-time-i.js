/**
 * 3439. Reschedule Meetings for Maximum Free Time I
 * https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/
 * Difficulty: Medium
 *
 * You are given an integer eventTime denoting the duration of an event, where the event occurs
 * from time t = 0 to time t = eventTime.
 *
 * You are also given two integer arrays startTime and endTime, each of length n. These represent
 * the start and end time of n non-overlapping meetings, where the ith meeting occurs during the
 * time [startTime[i], endTime[i]].
 *
 * You can reschedule at most k meetings by moving their start time while maintaining the same
 * duration, to maximize the longest continuous period of free time during the event.
 *
 * The relative order of all the meetings should stay the same and they should remain
 * non-overlapping.
 *
 * Return the maximum amount of free time possible after rearranging the meetings.
 *
 * Note that the meetings can not be rescheduled to a time outside the event.
 */

/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, k, startTime, endTime) {
  const n = startTime.length;
  const gaps = new Array(n + 1);

  gaps[0] = startTime[0];
  gaps[n] = eventTime - endTime[n - 1];
  for (let i = 1; i < n; i++) {
    gaps[i] = startTime[i] - endTime[i - 1];
  }

  let window = 0;
  for (let i = 0; i <= k; i++) {
    window += gaps[i];
  }

  let result = window;
  for (let i = k + 1; i <= n; i++) {
    window += gaps[i] - gaps[i - (k + 1)];
    result = Math.max(result, window);
  }

  return result;
};
