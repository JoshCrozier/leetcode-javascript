/**
 * 2412. Minimum Money Required Before Transactions
 * https://leetcode.com/problems/minimum-money-required-before-transactions/
 * Difficulty: Hard
 *
 * You are given a 0-indexed 2D integer array transactions, where
 * transactions[i] = [costi, cashbacki].
 *
 * The array describes transactions, where each transaction must be completed exactly once
 * in some order. At any given moment, you have a certain amount of money. In order to
 * complete transaction i, money >= costi must hold true. After performing a transaction,
 * money becomes money - costi + cashbacki.
 *
 * Return the minimum amount of money required before any transaction so that all of the
 * transactions can be completed regardless of the order of the transactions.
 */

/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minimumMoney = function(transactions) {
  let totalLoss = 0;
  let maxCost = 0;

  for (const [cost, cashback] of transactions) {
    if (cost > cashback) {
      totalLoss += cost - cashback;
      maxCost = Math.max(maxCost, cashback);
    } else {
      maxCost = Math.max(maxCost, cost);
    }
  }

  return totalLoss + maxCost;
};
