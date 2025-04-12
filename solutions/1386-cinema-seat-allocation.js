/**
 * 1386. Cinema Seat Allocation
 * https://leetcode.com/problems/cinema-seat-allocation/
 * Difficulty: Medium
 *
 * A cinema has n rows of seats, numbered from 1 to n and there are ten seats in each row, labelled
 * from 1 to 10 as shown in the figure above.
 *
 * Given the array reservedSeats containing the numbers of seats already reserved, for example,
 * reservedSeats[i] = [3,8] means the seat located in row 3 and labelled with 8 is already reserved.
 *
 * Return the maximum number of four-person groups you can assign on the cinema seats. A four-person
 * group occupies four adjacent seats in one single row. Seats across an aisle (such as [3,3] and
 * [3,4]) are not considered to be adjacent, but there is an exceptional case on which an aisle
 * split a four-person group, in that case, the aisle split a four-person group in the middle, which
 * means to have two people on each side.
 */

/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
  const rowReservations = new Map();

  for (const [row, seat] of reservedSeats) {
    if (!rowReservations.has(row)) {
      rowReservations.set(row, new Set());
    }
    rowReservations.get(row).add(seat);
  }

  let result = 2 * (n - rowReservations.size);

  for (const seats of rowReservations.values()) {
    let canPlaceGroup = false;

    if (!seats.has(2) && !seats.has(3) && !seats.has(4) && !seats.has(5)) {
      result++;
      canPlaceGroup = true;
    }
    if (!seats.has(6) && !seats.has(7) && !seats.has(8) && !seats.has(9)) {
      result++;
      canPlaceGroup = true;
    }
    if (!canPlaceGroup && !seats.has(4) && !seats.has(5) && !seats.has(6) && !seats.has(7)) {
      result++;
    }
  }

  return result;
};
