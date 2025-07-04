/**
 * 1570. Dot Product of Two Sparse Vectors
 * https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
 * Difficulty: Medium
 *
 * Given two sparse vectors, compute their dot product.
 *
 * Implement class SparseVector:
 * - SparseVector(nums) Initializes the object with the vector nums
 * - dotProduct(vec) Compute the dot product between the instance of SparseVector and vec
 *
 * A sparse vector is a vector that has mostly zero values, you should store the sparse vector
 * efficiently and compute the dot product between two SparseVector.
 *
 * Follow up: What if only one of the vectors is sparse?
 */

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
  this.nonZeroElements = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      this.nonZeroElements.set(i, nums[i]);
    }
  }
};

/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
  let result = 0;

  for (const [index, value] of this.nonZeroElements) {
    if (vec.nonZeroElements.has(index)) {
      result += value * vec.nonZeroElements.get(index);
    }
  }

  return result;
};
