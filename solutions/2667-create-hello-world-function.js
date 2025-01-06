/**
 * 2667. Create Hello World Function
 * https://leetcode.com/problems/create-hello-world-function/
 * Difficulty: Easy
 *
 * Write a function createHelloWorld. It should return a new function that
 * always returns "Hello World".
 */

/**
 * @return {Function}
 */
var createHelloWorld = function() {
  return () => 'Hello World';
};
