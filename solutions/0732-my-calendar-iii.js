/**
 * 732. My Calendar III
 * https://leetcode.com/problems/my-calendar-iii/
 * Difficulty: Hard
 *
 * A k-booking happens when k events have some non-empty intersection (i.e., there is some time
 * that is common to all k events.)
 *
 * You are given some events [startTime, endTime), after each given event, return an integer k
 * representing the maximum k-booking between all the previous events.
 *
 * Implement the MyCalendarThree class:
 * - MyCalendarThree() Initializes the object.
 * - int book(int startTime, int endTime) Returns an integer k representing the largest integer
 *   such that there exists a k-booking in the calendar.
 */

class MyCalendarThree {
  constructor() {
    this.events = [];
  }

  /**
   * @param {number} startTime
   * @param {number} endTime
   * @returns {number}
   */
  book(startTime, endTime) {
    this.insertTime(startTime, 1);
    this.insertTime(endTime, -1);
    let maxBookings = 1;
    let currentBookings = 0;
    this.events.forEach(event => maxBookings = Math.max(currentBookings += event[1], maxBookings));
    return maxBookings;
  }

  /**
   * @param {number} targetTime
   * @param {number} value
   */
  insertTime(targetTime, value) {
    const events = this.events;
    let left = 0;
    let right = events.length - 1;
    while (left <= right) {
      const mid = left + right >> 1;
      if (events[mid][0] < targetTime) left = mid + 1;
      else if (events[mid][0] > targetTime) right = mid - 1;
      else return events[mid][1] += value;
    }
    events.splice(left, 0, [targetTime, value]);
  }
}
