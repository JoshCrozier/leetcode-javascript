/**
 * 989. Add to Array-Form of Integer
 * https://leetcode.com/problems/add-to-array-form-of-integer/
 * Difficulty: Easy
 *
 * For a non-negative integer X, the array-form of X is
 * an array of its digits in left to right order.
 * For example, if X = 1231, then the array form is [1,2,3,1].
 *
 * Given the array-form A of a non-negative integer X,
 * return the array-form of the integer X+K.
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  return String(BigInt(A.join('')) + BigInt(K)).split('');
};
