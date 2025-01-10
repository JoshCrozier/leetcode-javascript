/**
 * 2037. Minimum Number of Moves to Seat Everyone
 * https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
 * Difficulty: Easy
 *
 * There are n availabe seats and n students standing in a room. You are given an array
 * seats of length n, where seats[i] is the position of the ith seat. You are also given
 * the array students of length n, where students[j] is the position of the jth student.
 *
 * You may perform the following move any number of times:
 * - Increase or decrease the position of the ith student by 1 (i.e., moving the ith
 * student from position x to x + 1 or x - 1)
 *
 * Return the minimum number of moves required to move each student to a seat such that
 * no two students are in the same seat.
 *
 * Note that there may be multiple seats or students in the same position at the beginning.
 */

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  return seats.reduce((a, b, i) => a += Math.abs(seats[i] - students[i]), 0);
};
