/**
 * 465. Optimal Account Balancing
 * https://leetcode.com/problems/optimal-account-balancing/
 * Difficulty: Hard
 *
 * You are given an array of transactions transactions where
 * transactions[i] = [fromi, toi, amounti] indicates that the person with ID = fromi
 * gave amounti $ to the person with ID = toi.
 *
 * Return the minimum number of transactions required to settle the debt.
 */

/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function(transactions) {
  const balances = new Array(12).fill(0);

  for (const [from, to, amount] of transactions) {
    balances[from] -= amount;
    balances[to] += amount;
  }

  const debts = balances.filter(balance => balance !== 0);
  return helper(0, 0);

  function helper(index, count) {
    if (index === debts.length) return count;

    if (debts[index] === 0) return helper(index + 1, count);

    let minTransactions = Infinity;
    const currentDebt = debts[index];

    for (let i = index + 1; i < debts.length; i++) {
      if (debts[i] * currentDebt < 0) {
        debts[i] += currentDebt;
        minTransactions = Math.min(minTransactions, helper(index + 1, count + 1));
        debts[i] -= currentDebt;
      }
    }

    return minTransactions;
  }
};
