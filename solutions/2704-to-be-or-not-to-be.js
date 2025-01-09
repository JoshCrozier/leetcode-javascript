/**
 * 2704. To Be Or Not To Be
 * https://leetcode.com/problems/to-be-or-not-to-be/
 * Difficulty: Easy
 *
 * Write a function expect that helps developers test their code. It should take in any
 * value val and return an object with the following two functions.
 *
 * - toBe(val) accepts another value and returns true if the two values === each other.
 *   If they are not equal, it should throw an error "Not Equal".
 * - notToBe(val) accepts another value and returns true if the two values !== each
 *   other. If they are equal, it should throw an error "Equal".
 */

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  const compareHelper = (error, fn) => {
    if (fn()) throw new Error(error);
    return true;
  };
  return {
    toBe: input => compareHelper('Not Equal', () => input !== val),
    notToBe: input => compareHelper('Equal', () => input === val),
  };
};
