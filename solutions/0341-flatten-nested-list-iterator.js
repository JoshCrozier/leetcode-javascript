/**
 * 341. Flatten Nested List Iterator
 * https://leetcode.com/problems/flatten-nested-list-iterator/
 * Difficulty: Medium
 *
 * You are given a nested list of integers nestedList. Each element is either an integer or a list
 * whose elements may also be integers or other lists. Implement an iterator to flatten it.
 *
 * Implement the NestedIterator class:
 * - NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list
 *   nestedList.
 * - int next() Returns the next integer in the nested list.
 * - boolean hasNext() Returns true if there are still some integers in the nested list and false
 *   otherwise.
 *
 * Your code will be tested with the following pseudocode:
 * initialize iterator with nestedList
 * res = []
 * while iterator.hasNext()
 *   append iterator.next() to the end of res
 * return res
 *
 * If res matches the expected flattened list, then your code will be judged as correct.
 */

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.stack = [];
  this.flatten(nestedList);
};

/**
 * @this NestedIterator
 * @param {NestedInteger[]} nestedList
 * @returns {void}
 */
NestedIterator.prototype.flatten = function(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    this.stack.push(list[i]);
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  while (this.stack.length > 0 && !this.stack[this.stack.length - 1].isInteger()) {
    const nested = this.stack.pop().getList();
    this.flatten(nested);
  }
  return this.stack.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  return this.stack.pop().getInteger();
};
