/**
 * 1359. Count All Valid Pickup and Delivery Options
 * https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/
 * Difficulty: Hard
 *
 * Given n orders, each order consists of a pickup and a delivery service.
 *
 * Count all valid pickup/delivery possible sequences such that delivery(i) is always after
 * of pickup(i).
 *
 * Since the answer may be too large, return it modulo 10^9 + 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
function countOrders(n) {
  const MOD = 1e9 + 7;
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = (result * (2 * i - 1) * i) % MOD;
  }

  return result;
}
