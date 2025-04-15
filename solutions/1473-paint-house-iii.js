/**
 * 1473. Paint House III
 * https://leetcode.com/problems/paint-house-iii/
 * Difficulty: Hard
 *
 * There is a row of m houses in a small city, each house must be painted with one of the n
 * colors (labeled from 1 to n), some houses that have been painted last summer should not
 * be painted again.
 *
 * A neighborhood is a maximal group of continuous houses that are painted with the same color.
 *
 * For example: houses = [1,2,2,3,3,2,1,1] contains 5 neighborhoods [{1}, {2,2}, {3,3}, {2}, {1,1}].
 *
 * Given an array houses, an m x n matrix cost and an integer target where:
 * - houses[i]: is the color of the house i, and 0 if the house is not painted yet.
 * - cost[i][j]: is the cost of paint the house i with the color j + 1.
 *
 * Return the minimum cost of painting all the remaining houses in such a way that there are exactly
 * target neighborhoods. If it is not possible, return -1.
 */

/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
  const cache = new Map();
  const result = findMinCost(0, 0, 0);
  return result === Infinity ? -1 : result;

  function findMinCost(index, prevColor, neighborhoods) {
    if (index === m) return neighborhoods === target ? 0 : Infinity;
    if (neighborhoods > target) return Infinity;

    const key = `${index}:${prevColor}:${neighborhoods}`;
    if (cache.has(key)) return cache.get(key);

    let minCost = Infinity;
    const currentColor = houses[index];

    if (currentColor !== 0) {
      const newNeighborhoods = prevColor === currentColor ? neighborhoods : neighborhoods + 1;
      minCost = findMinCost(index + 1, currentColor, newNeighborhoods);
    } else {
      for (let color = 1; color <= n; color++) {
        const newNeighborhoods = prevColor === color ? neighborhoods : neighborhoods + 1;
        const currentCost = cost[index][color - 1]
          + findMinCost(index + 1, color, newNeighborhoods);
        minCost = Math.min(minCost, currentCost);
      }
    }

    cache.set(key, minCost);
    return minCost;
  }
};
