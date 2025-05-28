/**
 * 2651. Calculate Delayed Arrival Time
 * https://leetcode.com/problems/calculate-delayed-arrival-time/
 * Difficulty: Easy
 *
 * You are given a positive integer arrivalTime denoting the arrival time of a train in
 * hours, and another positive integer delayedTime denoting the amount of delay in hours.
 *
 * Return the time when the train will arrive at the station.
 *
 * Note that the time in this problem is in 24-hours format.
 */

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24;
};
