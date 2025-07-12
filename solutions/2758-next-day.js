/**
 * 2758. Next Day
 * https://leetcode.com/problems/next-day/
 * Difficulty: Easy
 *
 * Write code that enhances all date objects such that you can call the date.nextDay() method
 * on any date object and it will return the next day in the format YYYY-MM-DD as a string.
 */

/**
 * @return {string}
 */
Date.prototype.nextDay = function() {
  const nextDate = new Date(this);
  nextDate.setDate(nextDate.getDate() + 1);
  return nextDate.toISOString().split('T')[0];
}
