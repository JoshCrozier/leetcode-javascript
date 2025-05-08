/**
 * 2048. Next Greater Numerically Balanced Number
 * https://leetcode.com/problems/next-greater-numerically-balanced-number/
 * Difficulty: Medium
 *
 * An integer x is numerically balanced if for every digit d in the number x, there are exactly
 * d occurrences of that digit in x.
 *
 * Given an integer n, return the smallest numerically balanced number strictly greater than n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
  let candidate = n + 1;
  while (candidate <= 10000000) {
    if (isBalanced(candidate)) return candidate;
    candidate++;
  }

  return -1;

  function isBalanced(num) {
    const freq = new Array(10).fill(0);
    const str = num.toString();

    for (const digit of str) {
      freq[digit]++;
    }

    for (const digit of str) {
      if (freq[digit] !== parseInt(digit)) return false;
    }

    return true;
  }
};
