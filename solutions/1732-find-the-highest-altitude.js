/**
 * 1732. Find the Highest Altitude
 * https://leetcode.com/problems/find-the-highest-altitude/
 * Difficulty: Easy
 *
 * There is a biker going on a road trip. The road trip consists of n + 1 points at different
 * altitudes. The biker starts his trip on point 0 with altitude equal 0.
 *
 * You are given an integer array gain of length n where gain[i] is the net gain in altitude
 * between points i and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  return Math.max(...gain.reduce((all, n, i) => all.push(all[i] - n * -1) && all, [0]));
};
