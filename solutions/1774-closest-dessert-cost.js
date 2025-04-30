/**
 * 1774. Closest Dessert Cost
 * https://leetcode.com/problems/closest-dessert-cost/
 * Difficulty: Medium
 *
 * You would like to make dessert and are preparing to buy the ingredients. You have n ice
 * cream base flavors and m types of toppings to choose from. You must follow these rules
 * when making your dessert:
 * - There must be exactly one ice cream base.
 * - You can add one or more types of topping or have no toppings at all.
 * - There are at most two of each type of topping.
 *
 * You are given three inputs:
 * - baseCosts, an integer array of length n, where each baseCosts[i] represents the price of
 *   the ith ice cream base flavor.
 * - toppingCosts, an integer array of length m, where each toppingCosts[i] is the price of
 *   one of the ith topping.
 * - target, an integer representing your target price for dessert.
 *
 * You want to make a dessert with a total cost as close to target as possible.
 *
 * Return the closest possible cost of the dessert to target. If there are multiple, return
 * the lower one.
 */

/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function(baseCosts, toppingCosts, target) {
  let result = Infinity;

  for (const base of baseCosts) {
    exploreToppings(0, base);
  }

  return result;

  function exploreToppings(index, currentCost) {
    const diff = Math.abs(currentCost - target);
    const prevDiff = Math.abs(result - target);

    if (diff < prevDiff || (diff === prevDiff && currentCost < result)) {
      result = currentCost;
    }

    if (index >= toppingCosts.length || currentCost > target) return;

    exploreToppings(index + 1, currentCost);
    exploreToppings(index + 1, currentCost + toppingCosts[index]);
    exploreToppings(index + 1, currentCost + 2 * toppingCosts[index]);
  }
};
