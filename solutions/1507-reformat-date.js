/**
 * 1507. Reformat Date
 * https://leetcode.com/problems/reformat-date/
 * Difficulty: Easy
 *
 * Given a date string in the form Day Month Year, where:
 * - Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
 * - Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
 * - Year is in the range [1900, 2100].
 *
 * Convert the date string to the format YYYY-MM-DD, where:
 * - YYYY denotes the 4 digit year.
 * - MM denotes the 2 digit month.
 * - DD denotes the 2 digit day.
 */

/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  const [_, day, month, year] = date.match(/(\d+)\w+\s+(\w+)\s+(\d+)/);
  return new Date(`${day} ${month} ${year}`).toISOString().split('T')[0];
};
