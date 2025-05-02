/**
 * 1865. Finding Pairs With a Certain Sum
 * https://leetcode.com/problems/finding-pairs-with-a-certain-sum/
 * Difficulty: Medium
 *
 * You are given two integer arrays nums1 and nums2. You are tasked to implement a data structure
 * that supports queries of two types:
 * 1. Add a positive integer to an element of a given index in the array nums2.
 * 2. Count the number of pairs (i, j) such that nums1[i] + nums2[j] equals a given
 *    value (0 <= i < nums1.length and 0 <= j < nums2.length).
 *
 * Implement the FindSumPairs class:
 * - FindSumPairs(int[] nums1, int[] nums2) Initializes the FindSumPairs object with two integer
 *   arrays nums1 and nums2.
 * - void add(int index, int val) Adds val to nums2[index], i.e., apply nums2[index] += val.
 * - int count(int tot) Returns the number of pairs (i, j) such that nums1[i] + nums2[j] == tot.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
  this.firstArray = nums1;
  this.secondArray = nums2;
  this.frequency = new Map();

  for (const num of nums2) {
    this.frequency.set(num, (this.frequency.get(num) || 0) + 1);
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
  const oldValue = this.secondArray[index];
  this.secondArray[index] += val;
  const newValue = this.secondArray[index];

  this.frequency.set(oldValue, this.frequency.get(oldValue) - 1);
  this.frequency.set(newValue, (this.frequency.get(newValue) || 0) + 1);
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
  let result = 0;

  for (const num of this.firstArray) {
    const complement = tot - num;
    result += this.frequency.get(complement) || 0;
  }

  return result;
};
