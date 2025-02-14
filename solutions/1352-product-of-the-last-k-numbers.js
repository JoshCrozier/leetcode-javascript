/**
 * 1352. Product of the Last K Numbers
 * https://leetcode.com/problems/product-of-the-last-k-numbers/
 * Difficulty: Medium
 *
 * Design an algorithm that accepts a stream of integers and retrieves the product of the
 * last k integers of the stream.
 *
 * Implement the ProductOfNumbers class:
 * - ProductOfNumbers() Initializes the object with an empty stream.
 * - void add(int num) Appends the integer num to the stream.
 * - int getProduct(int k) Returns the product of the last k numbers in the current list.
 *   You can assume that always the current list has at least k numbers.
 * - The test cases are generated so that, at any time, the product of any contiguous sequence
 *   of numbers will fit into a single 32-bit integer without overflowing.
 */

var ProductOfNumbers = function() {
  this.nums = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  this.nums.push(num);
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
  return this.nums.slice(-k).reduce((product, n) => product * n, 1);
};
