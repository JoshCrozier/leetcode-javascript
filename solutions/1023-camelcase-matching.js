/**
 * 1023. Camelcase Matching
 * https://leetcode.com/problems/camelcase-matching/
 * Difficulty: Medium
 *
 * Given an array of strings queries and a string pattern, return a boolean array answer
 * where answer[i] is true if queries[i] matches pattern, and false otherwise.
 *
 * A query word queries[i] matches pattern if you can insert lowercase English letters
 * pattern so that it equals the query. You may insert each character at any position
 * and you may not insert any characters.
 */

/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
  return queries.map(s => s.match(pattern.split(/(.)/).join('[a-z]*'))?.at(0) === s);
};
