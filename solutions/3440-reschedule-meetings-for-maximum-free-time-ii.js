/**
 * 3440. Reschedule Meetings for Maximum Free Time II
 * https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-ii/
 * Difficulty: Medium
 *
 * You are given an integer eventTime denoting the duration of an event. You are also given two
 * integer arrays startTime and endTime, each of length n.
 *
 * These represent the start and end times of n non-overlapping meetings that occur during the
 * event between time t = 0 and time t = eventTime, where the ith meeting occurs during the time
 * [startTime[i], endTime[i]].
 *
 * You can reschedule at most one meeting by moving its start time while maintaining the same
 * duration, such that the meetings remain non-overlapping, to maximize the longest continuous
 * period of free time during the event.
 *
 * Return the maximum amount of free time possible after rearranging the meetings.
 *
 * Note that the meetings can not be rescheduled to a time outside the event and they should
 * remain non-overlapping.
 *
 * Note: In this version, it is valid for the relative ordering of the meetings to change after
 * rescheduling one meeting.
 */

/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, startTime, endTime) {
  const gap = [startTime[0]];
  for (let i = 1; i < startTime.length; i++) {
    gap.push(startTime[i] - endTime[i - 1]);
  }
  gap.push(eventTime - endTime[endTime.length - 1]);

  const largestRight = new Array(gap.length).fill(0);
  for (let i = gap.length - 2; i >= 0; i--) {
    largestRight[i] = Math.max(largestRight[i + 1], gap[i + 1]);
  }

  let result = 0;
  let largestLeft = 0;

  for (let i = 1; i < gap.length; i++) {
    const currentGap = endTime[i - 1] - startTime[i - 1];
    if (currentGap <= Math.max(largestLeft, largestRight[i])) {
      result = Math.max(result, gap[i - 1] + gap[i] + currentGap);
    }
    result = Math.max(result, gap[i - 1] + gap[i]);
    largestLeft = Math.max(largestLeft, gap[i - 1]);
  }

  return result;
};
