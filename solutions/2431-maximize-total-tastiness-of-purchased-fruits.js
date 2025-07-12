/**
 * 2431. Maximize Total Tastiness of Purchased Fruits
 * https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/
 * Difficulty: Medium
 *
 * You are given two non-negative integer arrays price and tastiness, both arrays have the same
 * length n. You are also given two non-negative integers maxAmount and maxCoupons.
 *
 * For every integer i in range [0, n - 1]:
 * - price[i] describes the price of ith fruit.
 * - tastiness[i] describes the tastiness of ith fruit.
 *
 * You want to purchase some fruits such that total tastiness is maximized and the total price
 * does not exceed maxAmount.
 *
 * Additionally, you can use a coupon to purchase fruit for half of its price (rounded down to
 * the closest integer). You can use at most maxCoupons of such coupons.
 *
 * Return the maximum total tastiness that can be purchased.
 *
 * Note that:
 * - You can purchase each fruit at most once.
 * - You can use coupons on some fruit at most once.
 */

/**
 * @param {number[]} price
 * @param {number[]} tastiness
 * @param {number} maxAmount
 * @param {number} maxCoupons
 * @return {number}
 */
var maxTastiness = function(price, tastiness, maxAmount, maxCoupons) {
  const n = price.length;
  const map = new Map();

  return dp(0, maxAmount, maxCoupons);

  function dp(index, remainingAmount, remainingCoupons) {
    if (index === n) return 0;

    const key = `${index}_${remainingAmount}_${remainingCoupons}`;
    if (map.has(key)) return map.get(key);

    let maxValue = dp(index + 1, remainingAmount, remainingCoupons);

    if (price[index] <= remainingAmount) {
      maxValue = Math.max(
        maxValue,
        tastiness[index] + dp(index + 1, remainingAmount - price[index], remainingCoupons)
      );
    }

    if (remainingCoupons > 0) {
      const discountedPrice = Math.floor(price[index] / 2);
      if (discountedPrice <= remainingAmount) {
        maxValue = Math.max(
          maxValue,
          tastiness[index] + dp(index + 1, remainingAmount - discountedPrice, remainingCoupons - 1)
        );
      }
    }

    map.set(key, maxValue);
    return maxValue;
  }
};
