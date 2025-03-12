/**
 * 729. My Calendar I
 * https://leetcode.com/problems/my-calendar-i/
 * Difficulty: Medium
 *
 * You are implementing a program to use as your calendar. We can add a new event if adding the
 * event will not cause a double booking.
 *
 * A double booking happens when two events have some non-empty intersection (i.e., some moment
 * is common to both events.).
 *
 * The event can be represented as a pair of integers startTime and endTime that represents a
 * booking on the half-open interval [startTime, endTime), the range of real numbers x such
 * that startTime <= x < endTime.
 *
 * Implement the MyCalendar class:
 * - MyCalendar() Initializes the calendar object.
 * - boolean book(int startTime, int endTime) Returns true if the event can be added to the
 *   calendar successfully without causing a double booking. Otherwise, return false and do
 *   not add the event to the calendar.
 */

class MyCalendar {
  constructor() {
    this.events = [];
  }

  /**
   * @param {number} startTime
   * @param {number} endTime
   * @returns {boolean}
   */
  book(startTime, endTime) {
    const event = [startTime, endTime];
    const index = this.findInsertIndex(startTime);

    if (this.overlapsPrevious(index - 1, startTime) || this.overlapsNext(index, endTime)) {
      return false;
    }

    this.events.splice(index, 0, event);
    return true;
  }

  /**
   * @param {number} startTime
   * @returns {number}
   */
  findInsertIndex(startTime) {
    let left = 0;
    let right = this.events.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.events[mid][0] > startTime) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  /**
   * @param {number} prevIndex
   * @param {number} startTime
   * @returns {boolean}
   */
  overlapsPrevious(prevIndex, startTime) {
    return prevIndex >= 0 && this.events[prevIndex][1] > startTime;
  }

  /**
   * @param {number} nextIndex
   * @param {number} endTime
   * @returns {boolean}
   */
  overlapsNext(nextIndex, endTime) {
    return nextIndex < this.events.length && this.events[nextIndex][0] < endTime;
  }
}
