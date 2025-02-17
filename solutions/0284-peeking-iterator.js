/**
 * 284. Peeking Iterator
 * https://leetcode.com/problems/peeking-iterator/
 * Difficulty: Medium
 *
 * Design an iterator that supports the peek operation on an existing iterator in addition to
 * the hasNext and the next operations.
 *
 * Implement the PeekingIterator class:
 * - PeekingIterator(Iterator<int> nums) Initializes the object with the given integer iterator
 *   iterator.
 * - int next() Returns the next element in the array and moves the pointer to the next element.
 * - boolean hasNext() Returns true if there are still elements in the array.
 * - int peek() Returns the next element in the array without moving the pointer.
 *
 * Note: Each language may have a different implementation of the constructor and Iterator, but
 * they all support the int next() and boolean hasNext() functions.
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
  this.iterator = iterator;
  this.peekValue = iterator.next();
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  return this.peekValue;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  const next = this.peekValue;
  this.peekValue = this.iterator.next();
  return next;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  return this.peekValue > 0;
};
