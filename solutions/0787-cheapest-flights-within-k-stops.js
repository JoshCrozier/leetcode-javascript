/**
 * 787. Cheapest Flights Within K Stops
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/
 * Difficulty: Medium
 *
 * There are n cities connected by some number of flights. You are given an array flights where
 * flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city
 * toi with cost pricei.
 *
 * You are also given three integers src, dst, and k, return the cheapest price from src to dst
 * with at most k stops. If there is no such route, return -1.
 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  const MAX_INT = Number.MAX_SAFE_INTEGER;
  let prices = new Array(n).fill(MAX_INT);
  prices[src] = 0;

  for (let i = 0; i <= k; i++) {
    const tempPrices = [...prices];

    for (const [from, to, price] of flights) {
      if (prices[from] === MAX_INT) continue;

      const newPrice = prices[from] + price;
      if (newPrice < tempPrices[to]) {
        tempPrices[to] = newPrice;
      }
    }

    prices = tempPrices;
  }

  return prices[dst] === MAX_INT ? -1 : prices[dst];
};
