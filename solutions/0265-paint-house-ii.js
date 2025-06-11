/**
 * 265. Paint House II
 * https://leetcode.com/problems/paint-house-ii/
 * Difficulty: Hard
 *
 * There are a row of n houses, each house can be painted with one of the k colors. The cost of
 * painting each house with a certain color is different. You have to paint all the houses such
 * that no two adjacent houses have the same color.
 *
 * The cost of painting each house with a certain color is represented by an n x k cost matrix
 * costs.
 * - For example, costs[0][0] is the cost of painting house 0 with color 0; costs[1][2] is the
 *   cost of painting house 1 with color 2, and so on...
 *
 * Return the minimum cost to paint all houses.
 */

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
  const n = costs.length;
  const k = costs[0].length;
  let prev = [...costs[0]];

  for (let i = 1; i < n; i++) {
    const curr = new Array(k);
    let min1 = Infinity;
    let min2 = Infinity;
    let index = -1;

    for (let j = 0; j < k; j++) {
      if (prev[j] < min1) {
        min2 = min1;
        min1 = prev[j];
        index = j;
      } else if (prev[j] < min2) {
        min2 = prev[j];
      }
    }

    for (let j = 0; j < k; j++) {
      curr[j] = costs[i][j] + (j === index ? min2 : min1);
    }

    prev = curr;
  }

  return Math.min(...prev);
};
