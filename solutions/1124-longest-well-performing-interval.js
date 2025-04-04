/**
 * 1124. Longest Well-Performing Interval
 * https://leetcode.com/problems/longest-well-performing-interval/
 * Difficulty: Medium
 *
 * We are given hours, a list of the number of hours worked per day for a given employee.
 *
 * A day is considered to be a tiring day if and only if the number of hours worked is
 * (strictly) greater than 8.
 *
 * A well-performing interval is an interval of days for which the number of tiring days
 * is strictly larger than the number of non-tiring days.
 *
 * Return the length of the longest well-performing interval.
 */

/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
  let result = 0;
  let score = 0;
  const seen = new Map();

  for (let i = 0; i < hours.length; i++) {
    score += hours[i] > 8 ? 1 : -1;

    if (score > 0) {
      result = i + 1;
    } else {
      if (!seen.has(score)) {
        seen.set(score, i);
      }
      if (seen.has(score - 1)) {
        result = Math.max(result, i - seen.get(score - 1));
      }
    }
  }

  return result;
};
