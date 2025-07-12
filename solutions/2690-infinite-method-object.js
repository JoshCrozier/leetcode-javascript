/**
 * 2690. Infinite Method Object
 * https://leetcode.com/problems/infinite-method-object/
 * Difficulty: Easy
 *
 * Write a function that returns an infinite-method object.
 *
 * An infinite-method object is defined as an object that allows you to call any method and
 * it will always return the name of the method.
 *
 * For example, if you execute obj.abc123(), it will return "abc123".
 */

/**
 * @return {Object}
 */
var createInfiniteObject = function() {
  return new Proxy({}, {
    get(target, property) {
      return () => property;
    }
  });
};
