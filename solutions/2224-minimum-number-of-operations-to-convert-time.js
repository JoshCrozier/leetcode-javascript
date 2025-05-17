/**
 * 2224. Minimum Number of Operations to Convert Time
 * https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/
 * Difficulty: Easy
 *
 * You are given two strings current and correct representing two 24-hour times.
 *
 * 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00
 * and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.
 *
 * In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform
 * this operation any number of times.
 *
 * Return the minimum number of operations needed to convert current to correct.
 */

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
  const toMinutes = time => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  let diff = toMinutes(correct) - toMinutes(current);
  const increments = [60, 15, 5, 1];
  let result = 0;

  for (const increment of increments) {
    result += Math.floor(diff / increment);
    diff %= increment;
  }

  return result;
};
