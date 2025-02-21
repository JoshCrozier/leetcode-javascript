/**
 * 307. Range Sum Query - Mutable
 * https://leetcode.com/problems/range-sum-query-mutable/
 * Difficulty: Medium
 *
 * Given an integer array nums, handle multiple queries of the following types:
 * 1. Update the value of an element in nums.
 * 2. Calculate the sum of the elements of nums between indices left and right inclusive
 *    where left <= right.
 *
 * Implement the NumArray class:
 * - NumArray(int[] nums) Initializes the object with the integer array nums.
 * - void update(int index, int val) Updates the value of nums[index] to be val.
 * - int sumRange(int left, int right) Returns the sum of the elements of nums between
 *   indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.n = nums.length;
  this.tree = new Array(2 * this.n);

  for (let i = 0; i < this.n; i++) {
    this.tree[this.n + i] = nums[i];
  }

  for (let i = this.n - 1; i > 0; i--) {
    this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
  let position = this.n + index;
  this.tree[position] = val;

  while (position) {
    let left = position;
    let right = position;
    if (position % 2 === 0) {
      right = position + 1;
    } else {
      left = position - 1;
    }
    this.tree[position >> 1] = this.tree[left] + this.tree[right];
    position >>= 1;
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  let sum = 0;
  let l = this.n + left;
  let r = this.n + right + 1;

  while (l < r) {
    if (l % 2 == 1) {
      sum += this.tree[l++];
    }
    if (r % 2 == 1) {
      sum += this.tree[--r];
    }
    l >>= 1;
    r >>= 1;
  }

  return sum;
};
