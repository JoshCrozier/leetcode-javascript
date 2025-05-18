/**
 * 2303. Calculate Amount Paid in Taxes
 * https://leetcode.com/problems/calculate-amount-paid-in-taxes/
 * Difficulty: Easy
 *
 * You are given a 0-indexed 2D integer array brackets where brackets[i] = [upperi, percenti]
 * means that the ith tax bracket has an upper bound of upperi and is taxed at a rate of percenti.
 * The brackets are sorted by upper bound (i.e. upperi-1 < upperi for 0 < i < brackets.length).
 *
 * Tax is calculated as follows:
 * - The first upper0 dollars earned are taxed at a rate of percent0.
 * - The next upper1 - upper0 dollars earned are taxed at a rate of percent1.
 * - The next upper2 - upper1 dollars earned are taxed at a rate of percent2.
 * - And so on.
 *
 * You are given an integer income representing the amount of money you earned. Return the
 * amount of money that you have to pay in taxes. Answers within 10-5 of the actual answer
 * will be accepted.
 */

/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
  let result = 0;
  let previousUpper = 0;

  for (const [upper, percent] of brackets) {
    if (income > previousUpper) {
      const taxable = Math.min(income, upper) - previousUpper;
      result += taxable * (percent / 100);
      previousUpper = upper;
    } else {
      break;
    }
  }

  return result;
};
