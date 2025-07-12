/**
 * 2821. Delay the Resolution of Each Promise
 * https://leetcode.com/problems/delay-the-resolution-of-each-promise/
 * Difficulty: Medium
 *
 * Given an array functions and a number ms, return a new array of functions.
 * - functions is an array of functions that return promises.
 * - ms represents the delay duration in milliseconds. It determines the amount of time to wait
 *   before resolving or rejecting each promise in the new array.
 *
 * Each function in the new array should return a promise that resolves or rejects after an
 * additional delay of ms milliseconds, preserving the order of the original functions array.
 *
 * The delayAll function should ensure that each promise from functions is executed with a
 * delay, forming the new array of functions returning delayed promises.
 */

/**
 * @param {Array<Function>} functions
 * @param {number} ms
 * @return {Array<Function>}
 */
var delayAll = function(functions, ms) {
  return functions.map(fn => {
    return async function() {
      try {
        const result = await fn();
        await new Promise(resolve => setTimeout(resolve, ms));
        return result;
      } catch (error) {
        await new Promise(resolve => setTimeout(resolve, ms));
        throw error;
      }
    };
  });
};
