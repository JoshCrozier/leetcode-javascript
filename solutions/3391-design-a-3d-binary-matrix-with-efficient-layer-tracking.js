/**
 * 3391. Design a 3D Binary Matrix with Efficient Layer Tracking
 * https://leetcode.com/problems/design-a-3d-binary-matrix-with-efficient-layer-tracking/
 * Difficulty: Medium
 *
 * You are given a n x n x n binary 3D array matrix.
 *
 * Implement the Matrix3D class:
 * - Matrix3D(int n) Initializes the object with the 3D binary array matrix, where all elements
 *   are initially set to 0.
 * - void setCell(int x, int y, int z) Sets the value at matrix[x][y][z] to 1.
 * - void unsetCell(int x, int y, int z) Sets the value at matrix[x][y][z] to 0.
 * - int largestMatrix() Returns the index x where matrix[x] contains the most number of 1's.
 *   If there are multiple such indices, return the largest x.
 */

/**
 * @param {number} n
 */
var Matrix3D = function(n) {
  this.n = n;
  this.matrix = new Set();
  this.layerCounts = new Array(n).fill(0);
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
Matrix3D.prototype.setCell = function(x, y, z) {
  const key = `${x},${y},${z}`;
  if (!this.matrix.has(key)) {
    this.matrix.add(key);
    this.layerCounts[x]++;
  }
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
Matrix3D.prototype.unsetCell = function(x, y, z) {
  const key = `${x},${y},${z}`;
  if (this.matrix.has(key)) {
    this.matrix.delete(key);
    this.layerCounts[x]--;
  }
};

/**
 * @return {number}
 */
Matrix3D.prototype.largestMatrix = function() {
  const maxCount = Math.max(...this.layerCounts);
  for (let i = this.n - 1; i >= 0; i--) {
    if (this.layerCounts[i] === maxCount) {
      return i;
    }
  }
  return this.n - 1;
};
