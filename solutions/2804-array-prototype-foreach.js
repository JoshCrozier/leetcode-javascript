/**
 * 2804. Array Prototype ForEach
 * https://leetcode.com/problems/array-prototype-foreach/
 * Difficulty: Easy
 *
 * Write your version of method forEach that enhances all arrays such that you can call the
 * array.forEach(callback, context) method on any array and it will execute callback on each
 * element of the array. Method forEach should not return anything.
 *
 * callback accepts the following arguments:
 * - currentValue - represents the current element being processed in the array. It is the
 *   value of the element in the current iteration.
 * - index - represents the index of the current element being processed in the array.
 * - array - represents the array itself, allowing access to the entire array within the
 *   callback function.
 *
 * The context is the object that should be passed as the function context parameter to the
 * callback function, ensuring that the this keyword within the callback function refers to
 * this context object.
 *
 * Try to implement it without using the built-in array methods.
 */

/**
 * @param {Function} callback
 * @param {Object} context
 * @return {void}
 */
Array.prototype.forEach = function(callback, context) {
  for (let i = 0; i < this.length; i++) {
    callback.call(context, this[i], i, this);
  }
};
