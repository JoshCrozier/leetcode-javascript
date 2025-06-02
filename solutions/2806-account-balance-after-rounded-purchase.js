/**
 * 2806. Account Balance After Rounded Purchase
 * https://leetcode.com/problems/account-balance-after-rounded-purchase/
 * Difficulty: Easy
 *
 * Initially, you have a bank account balance of 100 dollars.
 *
 * You are given an integer purchaseAmount representing the amount you will spend on a purchase
 * in dollars, in other words, its price.
 *
 * When making the purchase, first the purchaseAmount is rounded to the nearest multiple of 10.
 * Let us call this value roundedAmount. Then, roundedAmount dollars are removed from your bank
 * account.
 *
 * Return an integer denoting your final bank account balance after this purchase.
 *
 * Notes:
 * - 0 is considered to be a multiple of 10 in this problem.
 * - When rounding, 5 is rounded upward (5 is rounded to 10, 15 is rounded to 20, 25 to 30, and
 *   so on).
 */

/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
  return 100 - (Math.round(purchaseAmount / 10) * 10);
};
