/**
 * 937. Reorder Data in Log Files
 * https://leetcode.com/problems/reorder-data-in-log-files/
 * Difficulty: Medium
 *
 * You are given an array of logs. Each log is a space-delimited string of words,
 * where the first word is the identifier.
 *
 * There are two types of logs:
 * - Letter-logs: All words (except the identifier) consist of lowercase English
 *   letters.
 * - Digit-logs: All words (except the identifier) consist of digits.
 *
 * Reorder these logs so that:
 * 1. The letter-logs come before all digit-logs.
 * 2. The letter-logs are sorted lexicographically by their contents. If their
 *   contents are the same, then sort them lexicographically by their identifiers.
 * 3. The digit-logs maintain their relative ordering.
 *
 * Return the final order of the logs.
 */

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const split = logs.map(l => l.split(' '));
  const sortedA = split.filter(l => isNaN(parseInt(l[1], 10))).sort((a, b) => {
    return a[1] !== b[1]
      ? a[1].localeCompare(b[1]) : a[2] !== b[2]
        ? a[2].localeCompare(b[2]) : a.length === b.length
          ? a[0].localeCompare(b[0]) : a.length - b.length;
  }).map(l => l.join(' '));
  const sortedB = split.filter(l => !isNaN(parseInt(l[1], 10)))
    .sort((a, b) => b - a)
    .map(l => l.join(' '));

  return [...sortedA, ...sortedB];
};
