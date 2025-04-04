/**
 * 1154. Day of the Year
 * https://leetcode.com/problems/day-of-the-year/
 * Difficulty: Easy
 *
 * Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD,
 * return the day number of the year.
 */

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [year, month, day] = date.split('-').map(Number);
  const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  if (isLeapYear) daysInMonth[1] = 29;

  let result = day;
  for (let i = 0; i < month - 1; i++) {
    result += daysInMonth[i];
  }

  return result;
};
