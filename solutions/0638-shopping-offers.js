/**
 * 638. Shopping Offers
 * https://leetcode.com/problems/shopping-offers/
 * Difficulty: Medium
 *
 * In LeetCode Store, there are n items to sell. Each item has a price. However, there are
 * some special offers, and a special offer consists of one or more different kinds of items
 * with a sale price.
 *
 * You are given an integer array price where price[i] is the price of the ith item, and an
 * integer array needs where needs[i] is the number of pieces of the ith item you want to buy.
 *
 * You are also given an array special where special[i] is of size n + 1 where special[i][j]
 * is the number of pieces of the jth item in the ith offer and special[i][n] (i.e., the last
 * integer in the array) is the price of the ith offer.
 *
 * Return the lowest price you have to pay for exactly certain items as given, where you could
 * make optimal use of the special offers. You are not allowed to buy more items than you want,
 * even if that would lower the overall price. You could use any of the special offers as many
 * times as you want.
 */

/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
  const map = new Map();
  return dp(needs);

  function dp(input) {
    const key = input.join(',');
    if (map.has(key)) return map.get(key);
    let minCost = input.reduce((sum, need, i) => sum + need * price[i], 0);
    for (const offer of special) {
      const nextNeeds = [...input];
      let valid = true;
      for (let i = 0; i < price.length; i++) {
        if (nextNeeds[i] < offer[i]) {
          valid = false;
          break;
        }
        nextNeeds[i] -= offer[i];
      }
      if (valid) {
        minCost = Math.min(minCost, offer[price.length] + dp(nextNeeds));
      }
    }
    map.set(key, minCost);
    return minCost;
  }
};
