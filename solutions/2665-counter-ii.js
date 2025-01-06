/**
 * 2665. Counter II
 * https://leetcode.com/problems/counter-ii/
 * Difficulty: Easy
 *
 * Write a function createCounter. It should accept an initial integer init.
 * It should return an object with three functions.
 *
 * The three functions are:
 * - increment() increases the current value by 1 and then returns it.
 * - decrement() reduces the current value by 1 and then returns it.
 * - reset() sets the current value to init and then returns it.
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let current = init;
  return {
    increment: () => ++current,
    decrement: () => --current,
    reset: () => current = init,
  };
};
