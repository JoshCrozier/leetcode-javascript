/**
 * 1360. Number of Days Between Two Dates
 * https://leetcode.com/problems/number-of-days-between-two-dates/
 * Difficulty: Easy
 *
 * Write a program to count the number of days between two dates.
 *
 * The two dates are given as strings, their format is `YYYY-MM-DD`
 * as shown in the examples.
 */

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  return Math.abs(new Date(date1) - new Date(date2)) / (24 * 60 * 60 * 1000);
};
