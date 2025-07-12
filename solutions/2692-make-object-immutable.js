/**
 * 2692. Make Object Immutable
 * https://leetcode.com/problems/make-object-immutable/
 * Difficulty: Medium
 *
 * Write a function that takes an object obj and returns a new immutable version of this object.
 *
 * An immutable object is an object that can't be altered and will throw an error if any attempt
 * is made to alter it.
 *
 * There are three types of error messages that can be produced from this new object.
 * - Attempting to modify a key on the object will result in this error message:
 *   - `Error Modifying: ${key}`.
 * - Attempting to modify an index on an array will result in this error message:
 *   - `Error Modifying Index: ${index}`.
 * - Attempting to call a method that mutates an array will result in this error message:
 *   - `Error Calling Method: ${methodName}`.
 *   - You may assume the only methods that can mutate an array
 *     are ['pop', 'push', 'shift', 'unshift', 'splice', 'sort', 'reverse'].
 *
 * obj is a valid JSON object or array, meaning it is the output of JSON.parse().
 *
 * Note that a string literal should be thrown, not an Error.
 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array} immutable obj
 */
var makeImmutable = function(obj) {
  const mutatingMethods = new Set(['pop', 'push', 'shift', 'unshift', 'splice', 'sort', 'reverse']);

  return new Proxy(obj, {
    set(target, key) {
      if (Array.isArray(target)) {
        throw `Error Modifying Index: ${key}`;
      }
      throw `Error Modifying: ${key}`;
    },

    get(target, key) {
      const value = target[key];

      if (typeof value === 'object' && value !== null) {
        return makeImmutable(value);
      }

      if (typeof value === 'function') {
        return new Proxy(value, {
          apply(...args) {
            if (mutatingMethods.has(key)) {
              throw `Error Calling Method: ${key}`;
            }
            return Reflect.apply(...args);
          }
        });
      }

      return value;
    }
  });
};
