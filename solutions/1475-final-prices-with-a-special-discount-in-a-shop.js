/**
 * 1475. Final Prices With a Special Discount in a Shop
 * https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
 * Difficulty: Easy
 *
 * Given the array prices where prices[i] is the price of the ith item in a shop.
 * There is a special discount for items in the shop, if you buy the ith item,
 * then you will receive a discount equivalent to prices[j] where j is the minimum
 * index such that j > i and prices[j] <= prices[i], otherwise, you will not receive
 * any discount at all.
 *
 * Return an array where the ith element is the final price you will pay for the ith
 * item of the shop considering the special discount.
 */

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  return prices.map((n, i) => n - (prices.slice(i + 1).find(v => v <= n) || 0));
};
