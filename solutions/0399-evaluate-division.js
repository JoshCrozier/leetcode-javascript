/**
 * 399. Evaluate Division
 * https://leetcode.com/problems/evaluate-division/
 * Difficulty: Medium
 *
 * You are given an array of variable pairs equations and an array of real numbers values,
 * where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i].
 * Each Ai or Bi is a string that represents a single variable.
 *
 * You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query
 * where you must find the answer for Cj / Dj = ?.
 *
 * Return the answers to all queries. If a single answer cannot be determined, return -1.0.
 *
 * Note: The input is always valid. You may assume that evaluating the queries will not
 * result in division by zero and that there is no contradiction.
 *
 * Note: The variables that do not occur in the list of equations are undefined, so the
 * answer cannot be determined for them.
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const map = equations.reduce((result, [a, b], index) => {
    result.set(a, [...(result.get(a) ?? []), [b, values[index]]]);
    result.set(b, [...(result.get(b) ?? []), [a, 1 / values[index]]]);
    return result;
  }, new Map());

  function traverse([a, b], seen = new Set(), current = 1) {
    if (!map.has(a) || !map.has(b)) return -1;
    if (a === b) return current;
    seen.add(a);

    for (const [key, value] of map.get(a)) {
      if (seen.has(key)) continue;
      const result = traverse([key, b], seen, current * value);
      if (result) return result;
    }
    return null;
  }

  return queries.map(item => traverse(item) ?? -1);
};
