/**
 * 2361. Minimum Costs Using the Train Line
 * https://leetcode.com/problems/minimum-costs-using-the-train-line/
 * Difficulty: Hard
 *
 * A train line going through a city has two routes, the regular route and the express route.
 * Both routes go through the same n + 1 stops labeled from 0 to n. Initially, you start on
 * the regular route at stop 0.
 *
 * You are given two 1-indexed integer arrays regular and express, both of length n.
 * regular[i] describes the cost it takes to go from stop i - 1 to stop i using the regular
 * route, and express[i] describes the cost it takes to go from stop i - 1 to stop i using
 * the express route.
 *
 * You are also given an integer expressCost which represents the cost to transfer from the
 * regular route to the express route.
 *
 * Note that:
 * - There is no cost to transfer from the express route back to the regular route.
 * - You pay expressCost every time you transfer from the regular route to the express route.
 * - There is no extra cost to stay on the express route.
 *
 * Return a 1-indexed array costs of length n, where costs[i] is the minimum cost to reach
 * stop i from stop 0.
 *
 * Note that a stop can be counted as reached from either route.
 */

/**
 * @param {number[]} regular
 * @param {number[]} express
 * @param {number} expressCost
 * @return {number[]}
 */
var minimumCosts = function(regular, express, expressCost) {
  const n = regular.length;
  const result = new Array(n);
  let regularDp = 0;
  let expressDp = expressCost;

  for (let i = 1; i <= n; i++) {
    const newRegularDp = Math.min(regularDp, expressDp) + regular[i - 1];
    const newExpressDp = Math.min(regularDp + expressCost, expressDp) + express[i - 1];

    regularDp = newRegularDp;
    expressDp = newExpressDp;
    result[i - 1] = Math.min(regularDp, expressDp);
  }

  return result;
};
