/**
 * 2548. Maximum Price to Fill a Bag
 * https://leetcode.com/problems/maximum-price-to-fill-a-bag/
 * Difficulty: Medium
 *
 * You are given a 2D integer array items where items[i] = [pricei, weighti] denotes the
 * price and weight of the ith item, respectively.
 *
 * You are also given a positive integer capacity.
 *
 * Each item can be divided into two items with ratios part1 and part2, where part1 + part2 == 1.
 * - The weight of the first item is weighti * part1 and the price of the first item is
 *   pricei * part1.
 * - Similarly, the weight of the second item is weighti * part2 and the price of the second
 *   item is pricei * part2.
 *
 * Return the maximum total price to fill a bag of capacity capacity with given items. If it
 * is impossible to fill a bag return -1. Answers within 10-5 of the actual answer will be
 * considered accepted.
 */

/**
 * @param {number[][]} items
 * @param {number} capacity
 * @return {number}
 */
var maxPrice = function(items, capacity) {
  const sortedItems = items.sort((a, b) => (b[0] / b[1]) - (a[0] / a[1]));
  let score = 0;

  for (const [price, weight] of sortedItems) {
    const take = Math.min(weight, capacity);
    score += price * take / weight;
    capacity -= take;
  }

  return capacity === 0 ? score : -1;
};
