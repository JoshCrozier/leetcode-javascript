/**
 * 1029. Two City Scheduling
 * https://leetcode.com/problems/two-city-scheduling/
 * Difficulty: Medium
 *
 * A company is planning to interview 2n people. Given the array costs where
 * costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti,
 * and the cost of flying the ith person to city b is bCosti.
 *
 * Return the minimum cost to fly every person to a city such that exactly n people
 * arrive in each city.
 */

/**
 * @param {number[][]} costs
 * @return {number}
 */
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  return costs
    .sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]))
    .reduce((sum, [a, b], index) => sum + (index < costs.length / 2 ? a : b), 0);
};
