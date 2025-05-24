/**
 * 2517. Maximum Tastiness of Candy Basket
 * https://leetcode.com/problems/maximum-tastiness-of-candy-basket/
 * Difficulty: Medium
 *
 * You are given an array of positive integers price where price[i] denotes the price of the ith
 * candy and a positive integer k.
 *
 * The store sells baskets of k distinct candies. The tastiness of a candy basket is the smallest
 * absolute difference of the prices of any two candies in the basket.
 *
 * Return the maximum tastiness of a candy basket.
 */

/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function(price, k) {
  price.sort((a, b) => a - b);
  let left = 0;
  let right = price[price.length - 1] - price[0];
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 1;
    let prev = price[0];

    for (let i = 1; i < price.length; i++) {
      if (price[i] - prev >= mid) {
        count++;
        prev = price[i];
      }
    }

    if (count >= k) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};
