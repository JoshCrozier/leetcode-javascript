/**
 * 983. Minimum Cost For Tickets
 * https://leetcode.com/problems/minimum-cost-for-tickets/
 * Difficulty: Medium
 *
 * You have planned some train traveling one year in advance. The days of the year in which you will
 * travel are given as an integer array days. Each day is an integer from 1 to 365.
 *
 * Train tickets are sold in three different ways:
 * - a 1-day pass is sold for costs[0] dollars,
 * - a 7-day pass is sold for costs[1] dollars, and
 * - a 30-day pass is sold for costs[2] dollars.
 *
 * The passes allow that many days of consecutive travel.
 *
 * For example, if we get a 7-day pass on day 2, then we can travel for 7 days: 2, 3, 4, 5, 6, 7,
 * and 8.
 *
 * Return the minimum number of dollars you need to travel every day in the given list of days.
 */

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const lastDay = days[days.length - 1];
  const travelDays = new Set(days);
  const minCost = new Array(lastDay + 1).fill(0);

  for (let day = 1; day <= lastDay; day++) {
    if (!travelDays.has(day)) {
      minCost[day] = minCost[day - 1];
      continue;
    }

    const oneDayCost = minCost[day - 1] + costs[0];
    const sevenDayCost = minCost[Math.max(0, day - 7)] + costs[1];
    const thirtyDayCost = minCost[Math.max(0, day - 30)] + costs[2];

    minCost[day] = Math.min(oneDayCost, sevenDayCost, thirtyDayCost);
  }

  return minCost[lastDay];
};
