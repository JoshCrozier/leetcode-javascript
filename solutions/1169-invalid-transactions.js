/**
 * 1169. Invalid Transactions
 * https://leetcode.com/problems/invalid-transactions/
 * Difficulty: Medium
 *
 * A transaction is possibly invalid if:
 * - the amount exceeds $1000, or;
 * - if it occurs within (and including) 60 minutes of another transaction with the same name in
 *   a different city.
 *
 * You are given an array of strings transaction where transactions[i] consists of comma-separated
 * values representing the name, time (in minutes), amount, and city of the transaction.
 *
 * Return a list of transactions that are possibly invalid. You may return the answer in any order.
 */

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
  const parsed = transactions.map(t => {
    const [name, time, amount, city] = t.split(',');
    return { name, time: Number(time), amount: Number(amount), city };
  });

  const invalid = new Set();

  for (let i = 0; i < parsed.length; i++) {
    const current = parsed[i];
    if (current.amount > 1000) {
      invalid.add(i);
    }

    for (let j = 0; j < parsed.length; j++) {
      const other = parsed[j];
      if (i !== j && current.name === other.name
          && Math.abs(current.time - other.time) <= 60 && current.city !== other.city) {
        invalid.add(i);
        invalid.add(j);
      }
    }
  }

  return [...invalid].map(index => transactions[index]);
};
