/**
 * 1227. Airplane Seat Assignment Probability
 * https://leetcode.com/problems/airplane-seat-assignment-probability/
 * Difficulty: Medium
 *
 * n passengers board an airplane with exactly n seats. The first passenger has lost the ticket and
 * picks a seat randomly. But after that, the rest of the passengers will:
 * - Take their own seat if it is still available, and
 * - Pick other seats randomly when they find their seat occupied
 *
 * Return the probability that the nth person gets his own seat.
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function(n) {
  return n === 1 ? 1 : 0.5;
};
