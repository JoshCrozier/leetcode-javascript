/**
 * 2021. Brightest Position on Street
 * https://leetcode.com/problems/brightest-position-on-street/
 * Difficulty: Medium
 *
 * A perfectly straight street is represented by a number line. The street has street lamp(s)
 * on it and is represented by a 2D integer array lights. Each lights[i] = [positioni, rangei]
 * indicates that there is a street lamp at position positioni that lights up the area from
 * [positioni - rangei, positioni + rangei] (inclusive).
 *
 * The brightness of a position p is defined as the number of street lamp that light up the
 * position p.
 *
 * Given lights, return the brightest position on the street. If there are multiple brightest
 * positions, return the smallest one.
 */

/**
 * @param {number[][]} lights
 * @return {number}
 */
var brightestPosition = function(lights) {
  const events = [];

  for (const [position, range] of lights) {
    events.push([position - range, 1]);
    events.push([position + range + 1, -1]);
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let maxBrightness = 0;
  let result = 0;
  let currentBrightness = 0;

  for (const [position, delta] of events) {
    currentBrightness += delta;

    if (currentBrightness > maxBrightness) {
      maxBrightness = currentBrightness;
      result = position;
    }
  }

  return result;
};
