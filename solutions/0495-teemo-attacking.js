/**
 * 495. Teemo Attacking
 * https://leetcode.com/problems/teemo-attacking/
 * Difficulty: Easy
 *
 * Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets
 * poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is
 * poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before
 * the poison effect ends, the timer for it is reset, and the poison effect will end duration
 * seconds after the new attack.
 *
 * You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo
 * attacks Ashe at second timeSeries[i], and an integer duration.
 *
 * Return the total number of seconds that Ashe is poisoned.
 */

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  return timeSeries.reduce((sum, n, i) => {
    return sum + Math.min(duration, (timeSeries[i + 1] ?? n + duration) - n);
  }, 0);
};
