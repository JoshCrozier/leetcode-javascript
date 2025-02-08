/**
 * 2336. Smallest Number in Infinite Set
 * https://leetcode.com/problems/smallest-number-in-infinite-set/
 * Difficulty: Medium
 *
 * You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].
 *
 * Implement the SmallestInfiniteSet class:
 * - SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all
 *   positive integers.
 * - int popSmallest() Removes and returns the smallest integer contained in the
 *   infinite set.
 * - void addBack(int num) Adds a positive integer num back into the infinite set,
 *   if it is not already in the infinite set.
 */

var SmallestInfiniteSet = function() {
  this.set = new Array(1000).fill(1);
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  const num = this.set.findIndex(n => n);
  this.set[num] = 0;
  return num + 1;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  this.set[num - 1] = 1;
};
