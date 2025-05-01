/**
 * 1825. Finding MK Average
 * https://leetcode.com/problems/finding-mk-average/
 * Difficulty: Hard
 *
 * You are given two integers, m and k, and a stream of integers. You are tasked to implement a data
 * structure that calculates the MKAverage for the stream.
 *
 * The MKAverage can be calculated using these steps:
 * - If the number of the elements in the stream is less than m you should consider the MKAverage to
 *   be -1. Otherwise, copy the last m elements of the stream to a separate container.
 * - Remove the smallest k elements and the largest k elements from the container.
 * - Calculate the average value for the rest of the elements rounded down to the nearest integer.
 *
 * Implement the MKAverage class:
 * - MKAverage(int m, int k) Initializes the MKAverage object with an empty stream and the two
 *   integers m and k.
 * - void addElement(int num) Inserts a new element num into the stream.
 * - int calculateMKAverage() Calculates and returns the MKAverage for the current stream rounded
 *   down to the nearest integer.
 */

/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function(m, k) {
  this.m = m;
  this.k = k;
  this.stream = [];
  this.sortedStream = [];
  this.sum = 0;
};

/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function(num) {
  this.stream.push(num);

  const insertIndex = this.findInsertPosition(num);
  this.sortedStream.splice(insertIndex, 0, num);
  this.sum += num;

  if (this.stream.length > this.m) {
    const oldestElement = this.stream.shift();
    const oldestIndex = this.sortedStream.indexOf(oldestElement);
    this.sortedStream.splice(oldestIndex, 1);
    this.sum -= oldestElement;
  }
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function() {
  if (this.stream.length < this.m) {
    return -1;
  }

  let adjustedSum = this.sum;

  for (let i = 0; i < this.k; i++) {
    adjustedSum -= this.sortedStream[i];
  }
  for (let i = this.sortedStream.length - this.k; i < this.sortedStream.length; i++) {
    adjustedSum -= this.sortedStream[i];
  }

  return Math.floor(adjustedSum / (this.m - 2 * this.k));
};

/**
 * Helper method to find insert position using binary search
 * @param {number} num
 * @return {number}
 */
MKAverage.prototype.findInsertPosition = function(num) {
  let left = 0;
  let right = this.sortedStream.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (this.sortedStream[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
