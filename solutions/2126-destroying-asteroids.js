/**
 * 2126. Destroying Asteroids
 * https://leetcode.com/problems/destroying-asteroids/
 * Difficulty: Medium
 *
 * You are given an integer mass, which represents the original mass of a planet. You are further
 * given an integer array asteroids, where asteroids[i] is the mass of the ith asteroid.
 *
 * You can arrange for the planet to collide with the asteroids in any arbitrary order. If the mass
 * of the planet is greater than or equal to the mass of the asteroid, the asteroid is destroyed
 * and the planet gains the mass of the asteroid. Otherwise, the planet is destroyed.
 *
 * Return true if all asteroids can be destroyed. Otherwise, return false.
 */

/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
  asteroids.sort((a, b) => a - b);

  let planetMass = BigInt(mass);
  for (const asteroid of asteroids) {
    if (planetMass < BigInt(asteroid)) return false;
    planetMass += BigInt(asteroid);
  }

  return true;
};
