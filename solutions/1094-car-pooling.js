/**
 * 1094. Car Pooling
 * https://leetcode.com/problems/car-pooling/
 * Difficulty: Medium
 *
 * There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn
 * around and drive west).
 *
 * You are given the integer capacity and an array trips where
 * trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi
 * passengers and the locations to pick them up and drop them off are fromi and toi respectively.
 * The locations are given as the number of kilometers due east from the car's initial location.
 *
 * Return true if it is possible to pick up and drop off all passengers for all the given trips,
 * or false otherwise.
 */

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  const timeline = new Array(1001).fill(0);

  for (const [passengers, start, end] of trips) {
    timeline[start] += passengers;
    timeline[end] -= passengers;
  }

  let currentPassengers = 0;
  for (const change of timeline) {
    currentPassengers += change;
    if (currentPassengers > capacity) return false;
  }

  return true;
};
