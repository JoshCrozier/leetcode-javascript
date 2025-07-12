/**
 * 2776. Convert Callback Based Function to Promise Based Function
 * https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/
 * Difficulty: Medium
 *
 * Write a function that accepts another function fn and converts the callback-based function into
 * a promise-based function.
 *
 * The function fn takes a callback as its first argument, along with any additional arguments
 * args passed as separate inputs.
 *
 * The promisify function returns a new function that should return a promise. The promise should
 * resolve with the argument passed as the first parameter of the callback when the callback is
 * invoked without error, and reject with the error when the callback is called with an error as
 * the second argument.
 *
 * The following is an example of a function that could be passed into promisify.
 * function sum(callback, a, b) {
 *   if (a < 0 || b < 0) {
 *     const err = Error('a and b must be positive');
 *     callback(undefined, err);
 *   } else {
 *     callback(a + b);
 *   }
 * }
 *
 * This is the equivalent code based on promises:
 *
 * async function sum(a, b) {
 *   if (a < 0 || b < 0) {
 *     throw Error('a and b must be positive');
 *   } else {
 *     return a + b;
 *   }
 * }
 * */

/**
 * @param {Function} fn
 * @return {Function<Promise<number>>}
 */
var promisify = function(fn) {
  return async function(...args) {
    return new Promise((resolve, reject) => {
      fn((result, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }, ...args);
    });
  };
};
