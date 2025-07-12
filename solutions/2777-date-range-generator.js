/**
 * 2777. Date Range Generator
 * https://leetcode.com/problems/date-range-generator/
 * Difficulty: Medium
 *
 * Given a start date start, an end date end, and a positive integer step, return a generator
 * object that yields dates in the range from start to end inclusive.
 *
 * The value of step indicates the number of days between consecutive yielded values.
 *
 * All yielded dates must be in the string format YYYY-MM-DD.
 */

/**
 * @param {string} start
 * @param {string} end
 * @param {number} step
 * @yields {string}
 */
var dateRangeGenerator = function* (start, end, step) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    yield currentDate.toISOString().split('T')[0];
    currentDate.setDate(currentDate.getDate() + step);
  }
};
