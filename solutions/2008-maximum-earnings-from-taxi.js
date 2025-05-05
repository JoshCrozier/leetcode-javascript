/**
 * 2008. Maximum Earnings From Taxi
 * https://leetcode.com/problems/maximum-earnings-from-taxi/
 * Difficulty: Medium
 *
 * There are n points on a road you are driving your taxi on. The n points on the road are
 * labeled from 1 to n in the direction you are going, and you want to drive from point 1
 * to point n to make money by picking up passengers. You cannot change the direction of the taxi.
 *
 * The passengers are represented by a 0-indexed 2D integer array rides, where
 * rides[i] = [starti, endi, tipi] denotes the ith passenger requesting a ride from point
 * starti to point endi who is willing to give a tipi dollar tip.
 *
 * For each passenger i you pick up, you earn endi - starti + tipi dollars. You may only drive
 * at most one passenger at a time.
 *
 * Given n and rides, return the maximum number of dollars you can earn by picking up the
 * passengers optimally.
 *
 * Note: You may drop off a passenger and pick up a different passenger at the same point.
 */

/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function(n, rides) {
  rides.sort((a, b) => a[1] - b[1]);
  const dp = new Array(n + 1).fill(0);
  let rideIndex = 0;

  for (let point = 1; point <= n; point++) {
    dp[point] = dp[point - 1];
    while (rideIndex < rides.length && rides[rideIndex][1] === point) {
      const [start, end, tip] = rides[rideIndex];
      dp[point] = Math.max(dp[point], dp[start] + (end - start + tip));
      rideIndex++;
    }
  }

  return dp[n];
};
