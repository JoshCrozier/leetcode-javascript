/**
 * 1845. Seat Reservation Manager
 * https://leetcode.com/problems/seat-reservation-manager/
 * Difficulty: Medium
 *
 * Design a system that manages the reservation state of n seats that are numbered from 1 to n.
 *
 * Implement the SeatManager class:
 * - SeatManager(int n) Initializes a SeatManager object that will manage n seats numbered from
 *   1 to n. All seats are initially available.
 * - int reserve() Fetches the smallest-numbered unreserved seat, reserves it, and returns its
 *   number.
 * - void unreserve(int seatNumber) Unreserves the seat with the given seatNumber.
 */

/**
 * @param {number} n
 */
var SeatManager = function(n) {
  this.nextAvailable = 1;
  this.unreservedSeats = new Set();
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
  if (this.unreservedSeats.size > 0) {
    const minSeat = Math.min(...this.unreservedSeats);
    if (minSeat < this.nextAvailable) {
      this.unreservedSeats.delete(minSeat);
      return minSeat;
    }
  }
  return this.nextAvailable++;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
  this.unreservedSeats.add(seatNumber);
};
