/**
 * 2237. Count Positions on Street With Required Brightness
 * https://leetcode.com/problems/count-positions-on-street-with-required-brightness/
 * Difficulty: Medium
 *
 * You are given an integer n. A perfectly straight street is represented by a number line
 * ranging from 0 to n - 1. You are given a 2D integer array lights representing the street
 * lamp(s) on the street. Each lights[i] = [positioni, rangei] indicates that there is a
 * street lamp at position positioni that lights up the area from
 * [max(0, positioni - rangei), min(n - 1, positioni + rangei)] (inclusive).
 *
 * The brightness of a position p is defined as the number of street lamps that light up the
 * position p. You are given a 0-indexed integer array requirement of size n where
 * requirement[i] is the minimum brightness of the ith position on the street.
 *
 * Return the number of positions i on the street between 0 and n - 1 that have a brightness
 * of at least requirement[i].
 */

/**
 * @param {number} n
 * @param {number[][]} lights
 * @param {number[]} requirement
 * @return {number}
 */
var meetRequirement = function(n, lights, requirement) {
  const brightness = new Array(n).fill(0);
  for (const [position, range] of lights) {
    const start = Math.max(0, position - range);
    const end = Math.min(n - 1, position + range);

    brightness[start]++;
    if (end + 1 < n) {
      brightness[end + 1]--;
    }
  }

  let currentBrightness = 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    currentBrightness += brightness[i];
    if (currentBrightness >= requirement[i]) {
      result++;
    }
  }

  return result;
};
