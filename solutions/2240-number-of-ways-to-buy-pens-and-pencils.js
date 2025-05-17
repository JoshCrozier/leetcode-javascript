/**
 * 2240. Number of Ways to Buy Pens and Pencils
 * https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/
 * Difficulty: Medium
 *
 * You are given an integer total indicating the amount of money you have. You are also given
 * two integers cost1 and cost2 indicating the price of a pen and pencil respectively. You can
 * spend part or all of your money to buy multiple quantities (or none) of each kind of writing
 * utensil.
 *
 * Return the number of distinct ways you can buy some number of pens and pencils.
 */

/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
  let result = 0;
  const maxPens = Math.floor(total / cost1);

  for (let pens = 0; pens <= maxPens; pens++) {
    const remaining = total - pens * cost1;
    const pencils = Math.floor(remaining / cost2);
    result += pencils + 1;
  }

  return result;
};
