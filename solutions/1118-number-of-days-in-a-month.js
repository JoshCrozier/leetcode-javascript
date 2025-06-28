/**
 * 1118. Number of Days in a Month
 * https://leetcode.com/problems/number-of-days-in-a-month/
 * Difficulty: Easy
 *
 * Given a year year and a month month, return the number of days of that month.
 */

/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
var numberOfDays = function(year, month) {
  return new Date(year, month, 0).getDate();
};
