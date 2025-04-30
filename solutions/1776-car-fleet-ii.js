/**
 * 1776. Car Fleet II
 * https://leetcode.com/problems/car-fleet-ii/
 * Difficulty: Hard
 *
 * There are n cars traveling at different speeds in the same direction along a one-lane road.
 * You are given an array cars of length n, where cars[i] = [positioni, speedi] represents:
 * - positioni is the distance between the ith car and the beginning of the road in meters.
 *   It is guaranteed that positioni < positioni+1.
 * - speedi is the initial speed of the ith car in meters per second.
 *
 * For simplicity, cars can be considered as points moving along the number line. Two cars
 * collide when they occupy the same position. Once a car collides with another car, they
 * unite and form a single car fleet. The cars in the formed fleet will have the same position
 * and the same speed, which is the initial speed of the slowest car in the fleet.
 *
 * Return an array answer, where answer[i] is the time, in seconds, at which the ith car
 * collides with the next car, or -1 if the car does not collide with the next car. Answers
 * within 10-5 of the actual answers are accepted.
 */

/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function(cars) {
  const n = cars.length;
  const stack = [];
  const collisionTimes = Array(n).fill(-1);

  for (let i = n - 1; i >= 0; i--) {
    const [pos, speed] = cars[i];

    while (stack.length > 0) {
      const j = stack[stack.length - 1];
      const [nextPos, nextSpeed] = cars[j];

      if (speed <= nextSpeed || (collisionTimes[j] > 0
          && (nextPos - pos) / (speed - nextSpeed) >= collisionTimes[j])) {
        stack.pop();
      } else {
        break;
      }
    }

    if (stack.length > 0) {
      const j = stack[stack.length - 1];
      const [nextPos, nextSpeed] = cars[j];
      collisionTimes[i] = (nextPos - pos) / (speed - nextSpeed);
    }

    stack.push(i);
  }

  return collisionTimes;
};
