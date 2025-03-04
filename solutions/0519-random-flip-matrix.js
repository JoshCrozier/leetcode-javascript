/**
 * 519. Random Flip Matrix
 * https://leetcode.com/problems/random-flip-matrix/
 * Difficulty: Medium
 *
 * There is an m x n binary grid matrix with all the values set 0 initially. Design an algorithm
 * to randomly pick an index (i, j) where matrix[i][j] == 0 and flips it to 1. All the indices
 * (i, j) where matrix[i][j] == 0 should be equally likely to be returned.
 *
 * Optimize your algorithm to minimize the number of calls made to the built-in random function
 * of your language and optimize the time and space complexity.
 *
 * Implement the Solution class:
 * - Solution(int m, int n) Initializes the object with the size of the binary matrix m and n.
 * - int[] flip() Returns a random index [i, j] of the matrix where matrix[i][j] == 0 and flips
 *   it to 1.
 * - void reset() Resets all the values of the matrix to be 0.
 */

/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function(m, n) {
  this.m = m;
  this.n = n;
  this.total = m * n;
  this.flipped = new Map();
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
  const index = Math.floor(Math.random() * this.total--);
  const result = this.flipped.get(index) ?? index;
  this.flipped.set(index, this.flipped.get(this.total) ?? this.total);
  return [Math.floor(result / this.n), result % this.n];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
  this.total = this.m * this.n;
  this.flipped.clear();
};
