/**
 * 2310. Sum of Numbers With Units Digit K
 * https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/
 * Difficulty: Medium
 *
 * Given two integers num and k, consider a set of positive integers with the following properties:
 * - The units digit of each integer is k.
 * - The sum of the integers is num.
 *
 * Return the minimum possible size of such a set, or -1 if no such set exists.
 *
 * Note:
 * - The set can contain multiple instances of the same integer, and the sum of an empty set is
 *   considered 0.
 * - The units digit of a number is the rightmost digit of the number.
 */

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function(num, k) {
  if (num === 0) return 0;

  for (let count = 1; count <= 10; count++) {
    if ((count * k) % 10 === num % 10 && count * k <= num) {
      return count;
    }
  }

  return -1;
};
