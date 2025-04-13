/**
 * 1409. Queries on a Permutation With Key
 * https://leetcode.com/problems/queries-on-a-permutation-with-key/
 * Difficulty: Medium
 *
 * Given the array queries of positive integers between 1 and m, you have to process all
 * queries[i] (from i=0 to i=queries.length-1) according to the following rules:
 * - In the beginning, you have the permutation P=[1,2,3,...,m].
 * - For the current i, find the position of queries[i] in the permutation P (indexing from 0)
 *   and then move this at the beginning of the permutation P. Notice that the position of
 *   queries[i] in P is the result for queries[i].
 *
 * Return an array containing the result for the given queries.
 */

/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
  const permutation = Array.from({ length: m }, (_, i) => i + 1);
  const result = [];

  for (const query of queries) {
    const position = permutation.indexOf(query);
    result.push(position);
    permutation.splice(position, 1);
    permutation.unshift(query);
  }

  return result;
};
