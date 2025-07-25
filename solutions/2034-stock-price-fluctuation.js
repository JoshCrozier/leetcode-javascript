/**
 * 2034. Stock Price Fluctuation
 * https://leetcode.com/problems/stock-price-fluctuation/
 * Difficulty: Medium
 *
 * You are given a stream of records about a particular stock. Each record contains a timestamp
 * and the corresponding price of the stock at that timestamp.
 *
 * Unfortunately due to the volatile nature of the stock market, the records do not come in order.
 * Even worse, some records may be incorrect. Another record with the same timestamp may appear
 * later in the stream correcting the price of the previous wrong record.
 *
 * Design an algorithm that:
 * - Updates the price of the stock at a particular timestamp, correcting the price from any
 *   previous records at the timestamp.
 * - Finds the latest price of the stock based on the current records. The latest price is the
 *   price at the latest timestamp recorded.
 * - Finds the maximum price the stock has been based on the current records.
 * - Finds the minimum price the stock has been based on the current records.
 *
 * Implement the StockPrice class:
 * - StockPrice() Initializes the object with no price records.
 * - void update(int timestamp, int price) Updates the price of the stock at the given timestamp.
 * - int current() Returns the latest price of the stock.
 * - int maximum() Returns the maximum price of the stock.
 * - int minimum() Returns the minimum price of the stock.
 */

var StockPrice = function() {
  this.timestamps = new Map();
  this.highestTimestamp = 0;
  this.minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
  this.maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);
};

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
  this.timestamps.set(timestamp, price);
  this.highestTimestamp = Math.max(this.highestTimestamp, timestamp);

  this.minHeap.enqueue([price, timestamp]);
  this.maxHeap.enqueue([price, timestamp]);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
  return this.timestamps.get(this.highestTimestamp);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
  let [currPrice, timestamp] = this.maxHeap.dequeue();

  while (currPrice !== this.timestamps.get(timestamp)) {
    [currPrice, timestamp] = this.maxHeap.dequeue();
  }

  this.maxHeap.enqueue([currPrice, timestamp]);
  return currPrice;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
  let [currPrice, timestamp] = this.minHeap.dequeue();

  while (currPrice !== this.timestamps.get(timestamp)) {
    [currPrice, timestamp] = this.minHeap.dequeue();
  }

  this.minHeap.enqueue([currPrice, timestamp]);
  return currPrice;
};
