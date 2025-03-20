/**
 * 849. Maximize Distance to Closest Person
 * https://leetcode.com/problems/maximize-distance-to-closest-person/
 * Difficulty: Medium
 *
 * You are given an array representing a row of seats where seats[i] = 1 represents a person
 * sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).
 *
 * There is at least one empty seat, and at least one person sitting.
 *
 * Alex wants to sit in the seat such that the distance between him and the closest person to
 * him is maximized.
 *
 * Return that maximum distance to the closest person.
 */

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let lastOccupied = -1;
  let result = 0;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      if (lastOccupied === -1) {
        result = i;
      } else {
        result = Math.max(result, Math.floor((i - lastOccupied) / 2));
      }
      lastOccupied = i;
    }
  }

  if (lastOccupied !== seats.length - 1) {
    result = Math.max(result, seats.length - 1 - lastOccupied);
  }

  return result;
};
