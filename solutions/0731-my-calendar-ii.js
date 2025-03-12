/**
 * 731. My Calendar II
 * https://leetcode.com/problems/my-calendar-ii/
 * Difficulty: Medium
 *
 * You are implementing a program to use as your calendar. We can add a new event if adding the
 * event will not cause a triple booking.
 *
 * A triple booking happens when three events have some non-empty intersection (i.e., some moment
 * is common to all the three events.).
 *
 * The event can be represented as a pair of integers startTime and endTime that represents a
 * booking on the half-open interval [startTime, endTime), the range of real numbers x such that
 * startTime <= x < endTime.
 *
 * Implement the MyCalendarTwo class:
 * - MyCalendarTwo() Initializes the calendar object.
 * - boolean book(int startTime, int endTime) Returns true if the event can be added to the calendar
 *   successfully without causing a triple booking. Otherwise, return false and do not add the event
 *   to the calendar.
 */

var MyCalendarTwo = function() {
  this.bookings = [];
  this.overlaps = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(startTime, endTime) {
  for (const [start, end] of this.overlaps) {
    if (startTime < end && endTime > start) return false;
  }

  for (const [start, end] of this.bookings) {
    if (startTime < end && endTime > start) {
      this.overlaps.push([Math.max(start, startTime), Math.min(end, endTime)]);
    }
  }

  this.bookings.push([startTime, endTime]);
  return true;
};
