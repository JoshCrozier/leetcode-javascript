/**
 * 2703. Return Length of Arguments Passed
 * https://leetcode.com/problems/return-length-of-arguments-passed/
 * Difficulty: Easy
 *
 * Write a function argumentsLength that returns the count of arguments passed to it.
 */

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
  return args.length;
};
