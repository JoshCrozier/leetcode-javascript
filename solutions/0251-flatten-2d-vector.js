/**
 * 251. Flatten 2D Vector
 * https://leetcode.com/problems/flatten-2d-vector/
 * Difficulty: Medium
 *
 * Design an iterator to flatten a 2D vector. It should support the next and hasNext operations.
 *
 * Implement the Vector2D class:
 * - Vector2D(int[][] vec) initializes the object with the 2D vector vec.
 * - next() returns the next element from the 2D vector and moves the pointer one step forward.
 *   You may assume that all the calls to next are valid.
 * - hasNext() returns true if there are still some elements in the vector, and false otherwise.
 */

/**
 * @param {number[][]} vec
 */
var Vector2D = function(vec) {
  this.vector = vec;
  this.row = 0;
  this.col = 0;
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
  while (this.row < this.vector.length && this.col >= this.vector[this.row].length) {
    this.row++;
    this.col = 0;
  }
  return this.vector[this.row][this.col++];
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
  while (this.row < this.vector.length && this.col >= this.vector[this.row].length) {
    this.row++;
    this.col = 0;
  }
  return this.row < this.vector.length;
};
