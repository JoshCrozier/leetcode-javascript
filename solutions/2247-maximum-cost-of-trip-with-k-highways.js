/**
 * 2247. Maximum Cost of Trip With K Highways
 * https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/
 * Difficulty: Hard
 *
 * A series of highways connect n cities numbered from 0 to n - 1. You are given a 2D integer array
 * highways where highways[i] = [city1i, city2i, tolli] indicates that there is a highway that
 * connects city1i and city2i, allowing a car to go from city1i to city2i and vice versa for a cost
 * of tolli.
 *
 * You are also given an integer k. You are going on a trip that crosses exactly k highways. You
 * may start at any city, but you may only visit each city at most once during your trip.
 *
 * Return the maximum cost of your trip. If there is no trip that meets the requirements, return -1.
 */

/**
 * @param {number} n
 * @param {number[][]} highways
 * @param {number} k
 * @return {number}
 */
var maximumCost = function(n, highways, k) {
  if (k + 1 > n) return -1;

  const graph = Array(n).fill().map(() => []);
  for (const [cityA, cityB, cost] of highways) {
    graph[cityA].push([cityB, cost]);
    graph[cityB].push([cityA, cost]);
  }

  const memo = new Map();
  let result = -1;

  for (let city = 0; city < n; city++) {
    result = Math.max(result, dp(city, 1 << city));
  }

  return result;

  function dp(city, bitmask) {
    const citiesVisited = bitmask.toString(2).split('1').length - 1;
    if (citiesVisited === k + 1) return 0;

    const key = `${city}_${bitmask}`;
    if (memo.has(key)) return memo.get(key);

    let answer = -1;
    for (const [neighborCity, highwayCost] of graph[city]) {
      if (!((bitmask >> neighborCity) & 1)) {
        const neighborAnswer = dp(neighborCity, bitmask | (1 << neighborCity));
        if (neighborAnswer !== -1) {
          answer = Math.max(answer, highwayCost + neighborAnswer);
        }
      }
    }

    memo.set(key, answer);
    return answer;
  }
};
