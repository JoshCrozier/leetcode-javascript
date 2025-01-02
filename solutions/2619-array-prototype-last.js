/**
 * 2619. Array Prototype Last
 * https://leetcode.com/problems/array-prototype-last/
 * Difficulty: Easy
 *
 * Write code that enhances all arrays such that you can call the array.last() method on
 * any array and it will return the last element. If there are no elements in the array,
 * it should return -1.
 *
 * You may assume the array is the output of JSON.parse.
 */

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  return !this.length ? -1 : this[this.length - 1];
};
