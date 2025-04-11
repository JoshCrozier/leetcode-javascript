/**
 * 1344. Angle Between Hands of a Clock
 * https://leetcode.com/problems/angle-between-hands-of-a-clock/
 * Difficulty: Medium
 *
 * Given two numbers, hour and minutes, return the smaller angle (in degrees) formed between the
 * hour and the minute hand.
 *
 * Answers within 10-5 of the actual value will be accepted as correct.
 */

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
  const hourAngle = (hour % 12 + minutes / 60) * 30;
  const minuteAngle = minutes * 6;
  const angle = Math.abs(hourAngle - minuteAngle);
  return Math.min(angle, 360 - angle);
};
