/**
 * 746. Min Cost Climbing Stairs
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 * Difficulty: Easy
 *
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 *
 * You can either start from the step with index 0, or the step with index 1.
 *
 * Return the minimum cost to reach the top of the floor.
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let [first, second] = cost;

  for (let index = 2; index < cost.length; index++) {
    const cursor = cost[index] + Math.min(first, second);
    first = second;
    second = cursor;
  }

  return Math.min(first, second);
};
