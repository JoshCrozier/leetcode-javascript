/**
 * 2629. Function Composition
 * https://leetcode.com/problems/function-composition/
 * Difficulty: Easy
 *
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function
 * composition of the array of functions.
 *
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 *
 * The function composition of an empty list of functions is the identity function f(x) = x.
 *
 * You may assume each function in the array accepts one integer as input and returns one integer
 * as output.
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return x => functions.reduceRight((result, fn) => fn(result), x);
};
