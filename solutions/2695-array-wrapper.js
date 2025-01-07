/**
 * 2695. Array Wrapper
 * https://leetcode.com/problems/array-wrapper/
 * Difficulty: Easy
 *
 * Create a class ArrayWrapper that accepts an array of integers in its constructor.
 *
 * This class should have two features:
 * - When two instances of this class are added together with the + operator, the resulting
 *   value is the sum of all the elements in both arrays.
 * - When the String() function is called on the instance, it will return a comma separated
 *   string surrounded by brackets. For example, [1,2,3].
 */

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
  this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
  return this.nums.reduce((sum, n) => sum + n, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
  return JSON.stringify(this.nums);
};
