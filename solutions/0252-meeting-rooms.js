/**
 * 252. Meeting Rooms
 * https://leetcode.com/problems/meeting-rooms/
 * Difficulty: Easy
 *
 * Given an array of meeting time intervals where intervals[i] = [starti, endi], determine
 * if a person could attend all meetings.
 */

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
};
