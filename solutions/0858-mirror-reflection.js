/**
 * 858. Mirror Reflection
 * https://leetcode.com/problems/mirror-reflection/
 * Difficulty: Medium
 *
 * There is a special square room with mirrors on each of the four walls. Except for the southwest
 * corner, there are receptors on each of the remaining corners, numbered 0, 1, and 2.
 *
 * The square room has walls of length p and a laser ray from the southwest corner first meets the
 * east wall at a distance q from the 0th receptor.
 *
 * Given the two integers p and q, return the number of the receptor that the ray meets first.
 *
 * The test cases are guaranteed so that the ray will meet a receptor eventually.
 */

/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
  const gcd = findGCD(p, q);
  const m = q / gcd;
  const n = p / gcd;

  if (m % 2 === 0) return 0;
  return n % 2 === 1 ? 1 : 2;
};

function findGCD(a, b) {
  return b === 0 ? a : findGCD(b, a % b);
}
