/**
 * 281. Zigzag Iterator
 * https://leetcode.com/problems/zigzag-iterator/
 * Difficulty: Medium
 *
 * Given two vectors of integers v1 and v2, implement an iterator to return their elements
 * alternately.
 *
 * Implement the ZigzagIterator class:
 * - ZigzagIterator(List<int> v1, List<int> v2) initializes the object with the two vectors
 *   v1 and v2.
 * - boolean hasNext() returns true if the iterator still has elements, and false otherwise.
 * - int next() returns the current element of the iterator and moves the iterator to the
 *   next element.
 */

/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v2
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.queue = [];
  if (v1.length) this.queue.push([v1, 0]);
  if (v2.length) this.queue.push([v2, 0]);
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.queue.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  const [vector, index] = this.queue.shift();
  const value = vector[index];

  if (index + 1 < vector.length) {
    this.queue.push([vector, index + 1]);
  }

  return value;
};
