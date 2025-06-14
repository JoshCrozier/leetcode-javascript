/**
 * 346. Moving Average from Data Stream
 * https://leetcode.com/problems/moving-average-from-data-stream/
 * Difficulty: Easy
 *
 * Given a stream of integers and a window size, calculate the moving average of all integers
 * in the sliding window.
 *
 * Implement the MovingAverage class:
 * - MovingAverage(int size) Initializes the object with the size of the window size.
 * - double next(int val) Returns the moving average of the last size values of the stream.
 */

/**
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.window = [];
  this.maxSize = size;
  this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.window.push(val);
  this.sum += val;

  if (this.window.length > this.maxSize) {
    this.sum -= this.window.shift();
  }

  return this.sum / this.window.length;
};
