/**
 * 2600. K Items With the Maximum Sum
 * https://leetcode.com/problems/k-items-with-the-maximum-sum/
 * Difficulty: Easy
 *
 * There is a bag that consists of items, each item has a number 1, 0, or -1 written on it.
 *
 * You are given four non-negative integers numOnes, numZeros, numNegOnes, and k.
 *
 * The bag initially contains:
 * - numOnes items with 1s written on them.
 * - numZeroes items with 0s written on them.
 * - numNegOnes items with -1s written on them.
 *
 * We want to pick exactly k items among the available items. Return the maximum possible sum
 * of numbers written on the items.
 */

/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
  let result = 0;

  if (k <= numOnes) {
    result = k;
  } else if (k <= numOnes + numZeros) {
    result = numOnes;
  } else {
    result = numOnes - (k - numOnes - numZeros);
  }

  return result;
};
