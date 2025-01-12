/**
 * 735. Asteroid Collision
 * https://leetcode.com/problems/asteroid-collision/
 * Difficulty: Medium
 *
 * We are given an array asteroids of integers representing asteroids in a row. The indices
 * of the asteriod in the array represent their relative position in space.
 *
 * For each asteroid, the absolute value represents its size, and the sign represents its
 * direction (positive meaning right, negative meaning left). Each asteroid moves at the
 * same speed.
 *
 * Find out the state of the asteroids after all collisions. If two asteroids meet, the
 * smaller one will explode. If both are the same size, both will explode. Two asteroids
 * moving in the same direction will never meet.
 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const result = [];

  for (let i = 0; i < asteroids.length; i++) {
    const previous = result[result.length - 1];
    const current = asteroids[i];

    if (!result.length || previous < 0 || current > 0) {
      result.push(current);
    } else if (-current === previous) {
      result.pop();
    } else if (-current > previous) {
      result.pop();
      i--;
    }
  }

  return result;
};
