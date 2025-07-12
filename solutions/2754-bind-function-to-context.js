/**
 * 2754. Bind Function to Context
 * https://leetcode.com/problems/bind-function-to-context/
 * Difficulty: Medium
 *
 * Enhance all functions to have the bindPolyfill method. When bindPolyfill is called with
 * a passed object obj, that object becomes the this context for the function.
 *
 * For example, if you had the code:
 * function f() {
 *   console.log('My context is ' + this.ctx);
 * }
 * f();
 *
 * The output would be "My context is undefined". However, if you bound the function:
 * function f() {
 *   console.log('My context is ' + this.ctx);
 * }
 * const boundFunc = f.boundPolyfill({ "ctx": "My Object" })
 * boundFunc();
 *
 * The output should be "My context is My Object".
 *
 * You may assume that a single non-null object will be passed to the bindPolyfill method.
 *
 * Please solve it without the built-in Function.bind method.
 */

/**
 * @param {Object} obj
 * @return {Function}
 */
Function.prototype.bindPolyfill = function(obj) {
  var fn = this;
  return function() {
    return fn.apply(obj, arguments);
  };
};
