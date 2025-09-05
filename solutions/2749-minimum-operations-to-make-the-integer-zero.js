/**
 * 2749. Minimum Operations to Make the Integer Zero
 * https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/
 * Difficulty: Medium
 *
 * You are given two integers num1 and num2.
 *
 * In one operation, you can choose integer i in the range [0, 60] and subtract 2i + num2 from num1.
 *
 * Return the integer denoting the minimum number of operations needed to make num1 equal to 0.
 *
 * If it is impossible to make num1 equal to 0, return -1.
 */

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function(num1, num2) {
  for (let operations = 1; operations <= 60; operations++) {
    const remaining = num1 - num2 * operations;

    if (remaining < operations) {
      return -1;
    }

    if (operations >= countBits(remaining)) {
      return operations;
    }
  }

  return -1;

  function countBits(n) {
    let count = 0;
    while (n > 0) {
      count += n & 1;
      n = Math.floor(n / 2);
    }
    return count;
  }
};
