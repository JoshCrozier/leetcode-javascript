/**
 * 365. Water and Jug Problem
 * https://leetcode.com/problems/water-and-jug-problem/
 * Difficulty: Medium
 *
 * You are given two jugs with capacities x liters and y liters. You have an infinite water
 * supply. Return whether the total amount of water in both jugs may reach target using the
 * following operations:
 * - Fill either jug completely with water.
 * - Completely empty either jug.
 * - Pour water from one jug into another until the receiving jug is full, or the
 *   transferring jug is empty.
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
  if (target > x + y) return false;
  if (target === 0) return true;
  if (x === 0) return target === y;
  if (y === 0) return target === x;
  return target % gcd(x, y) === 0;

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
};
