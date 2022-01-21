/**
 * 1716. Calculate Money in Leetcode Bank
 * https://leetcode.com/problems/calculate-money-in-leetcode-bank/
 * Difficulty: Easy
 *
 * Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
 *
 * He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will
 * put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the
 * previous Monday. Given n, return the total amount of money he will have in the Leetcode bank at
 * the end of the nth day.
 */

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  let mondayCount = Math.floor(n / 7);
  let aggregate = (mondayCount ** 2 + 7 * mondayCount) / 2;
  let result = aggregate * 7;
  for (let i = 0; i < n - mondayCount * 7; i++) {
    result += mondayCount + i + 1;
  }
  return result;
};
