/**
 * 1109. Corporate Flight Bookings
 * https://leetcode.com/problems/corporate-flight-bookings/
 * Difficulty: Medium
 *
 * There are n flights that are labeled from 1 to n.
 *
 * You are given an array of flight bookings bookings, where bookings[i] = [firsti, lasti, seatsi]
 * represents a booking for flights firsti through lasti (inclusive) with seatsi seats reserved
 * for each flight in the range.
 *
 * Return an array answer of length n, where answer[i] is the total number of seats reserved for
 * flight i.
 */

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  const result = new Array(n).fill(0);

  for (const [start, end, count] of bookings) {
    result[start - 1] += count;
    if (end < n) result[end] -= count;
  }

  for (let i = 1; i < n; i++) {
    result[i] += result[i - 1];
  }

  return result;
};
