/**
 * 1052. Grumpy Bookstore Owner
 * https://leetcode.com/problems/grumpy-bookstore-owner/
 * Difficulty: Medium
 *
 * There is a bookstore owner that has a store open for n minutes. You are given an integer array
 * customers of length n where customers[i] is the number of the customers that enter the store
 * at the start of the ith minute and all those customers leave after the end of that minute.
 *
 * During certain minutes, the bookstore owner is grumpy. You are given a binary array grumpy
 * where grumpy[i] is 1 if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.
 *
 * When the bookstore owner is grumpy, the customers entering during that minute are not satisfied.
 * Otherwise, they are satisfied.
 *
 * The bookstore owner knows a secret technique to remain not grumpy for minutes consecutive
 * minutes, but this technique can only be used once.
 *
 * Return the maximum number of customers that can be satisfied throughout the day.
 */

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
  let baseSatisfied = 0;
  let windowGain = 0;
  let maxGain = 0;

  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      baseSatisfied += customers[i];
    }
    if (i < minutes) {
      windowGain += grumpy[i] * customers[i];
    } else {
      windowGain += grumpy[i] * customers[i] - grumpy[i - minutes] * customers[i - minutes];
    }
    maxGain = Math.max(maxGain, windowGain);
  }

  return baseSatisfied + maxGain;
};
