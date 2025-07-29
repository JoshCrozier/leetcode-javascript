/**
 * 2285. Maximum Total Importance of Roads
 * https://leetcode.com/problems/maximum-total-importance-of-roads/
 * Difficulty: Medium
 *
 * You are given an integer n denoting the number of cities in a country. The cities are
 * numbered from 0 to n - 1.
 *
 * You are also given a 2D integer array roads where roads[i] = [ai, bi] denotes that there
 * exists a bidirectional road connecting cities ai and bi.
 *
 * You need to assign each city with an integer value from 1 to n, where each value can
 * only be used once. The importance of a road is then defined as the sum of the values
 * of the two cities it connects.
 *
 * Return the maximum total importance of all roads possible after assigning the values
 * optimally.
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
  const degrees = new Array(n).fill(0);

  for (const [a, b] of roads) {
    degrees[a]++;
    degrees[b]++;
  }

  const cities = Array.from({ length: n }, (_, i) => i);
  cities.sort((a, b) => degrees[b] - degrees[a]);

  let result = 0;
  for (let i = 0; i < n; i++) {
    result += degrees[cities[i]] * (n - i);
  }

  return result;
};
