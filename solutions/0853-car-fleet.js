/**
 * 853. Car Fleet
 * https://leetcode.com/problems/car-fleet/
 * Difficulty: Medium
 *
 * There are n cars at given miles away from the starting mile 0, traveling to reach the mile
 * target.
 *
 * You are given two integer array position and speed, both of length n, where position[i]
 * is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.
 *
 * A car cannot pass another car, but it can catch up and then travel next to it at the speed of
 * the slower car.
 *
 * A car fleet is a car or cars driving next to each other. The speed of the car fleet is the
 * minimum speed of any car in the fleet.
 *
 * If a car catches up to a car fleet at the mile target, it will still be considered as part
 * of the car fleet.
 *
 * Return the number of car fleets that will arrive at the destination.
 */

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  const cars = position.map((pos, i) => ({
    position: pos,
    timeToTarget: (target - pos) / speed[i]
  }));
  cars.sort((a, b) => b.position - a.position);

  let slowestTime = 0;
  let result = 0;
  for (const car of cars) {
    if (car.timeToTarget > slowestTime) {
      result++;
      slowestTime = car.timeToTarget;
    }
  }

  return result;
};
