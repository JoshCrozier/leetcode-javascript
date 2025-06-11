/**
 * 256. Paint House
 * https://leetcode.com/problems/paint-house/
 * Difficulty: Medium
 *
 * There is a row of n houses, where each house can be painted one of three colors: red, blue,
 * or green. The cost of painting each house with a certain color is different. You have to
 * paint all the houses such that no two adjacent houses have the same color.
 *
 * The cost of painting each house with a certain color is represented by an n x 3 cost matrix
 * costs.
 * - For example, costs[0][0] is the cost of painting house 0 with the color red; costs[1][2]
 *   is the cost of painting house 1 with color green, and so on...
 *
 * Return the minimum cost to paint all houses.
 */

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  let prev = [...costs[0]];

  for (let i = 1; i < costs.length; i++) {
    prev = [
      costs[i][0] + Math.min(prev[1], prev[2]),
      costs[i][1] + Math.min(prev[0], prev[2]),
      costs[i][2] + Math.min(prev[0], prev[1])
    ];
  }

  return Math.min(...prev);
};
