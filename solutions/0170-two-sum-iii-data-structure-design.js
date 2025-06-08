/**
 * 170. Two Sum III - Data structure design
 * https://leetcode.com/problems/two-sum-iii-data-structure-design/
 * Difficulty: Easy
 *
 * Design a data structure that accepts a stream of integers and checks if it has a pair of
 * integers that sum up to a particular value.
 *
 * Implement the TwoSum class:
 * - TwoSum() Initializes the TwoSum object, with an empty array initially.
 * - void add(int number) Adds number to the data structure.
 * - boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal
 *   to value, otherwise, it returns false.
 */

var TwoSum = function() {
  this.numCount = new Map();
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.numCount.set(number, (this.numCount.get(number) || 0) + 1);
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  for (const num of this.numCount.keys()) {
    const complement = value - num;
    if (complement === num) {
      if (this.numCount.get(num) > 1) return true;
    } else if (this.numCount.has(complement)) {
      return true;
    }
  }
  return false;
};
