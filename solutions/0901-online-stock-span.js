/**
 * 901. Online Stock Span
 * https://leetcode.com/problems/online-stock-span/
 * Difficulty: Medium
 *
 * Design an algorithm that collects daily price quotes for some stock and returns the
 * span of that stock's price for the current day.
 *
 * The span of the stock's price in one day is the maximum number of consecutive days
 * (starting from that day and going backward) for which the stock price was less than
 * or equal to the price of that day.
 *
 * - For example, if the prices of the stock in the last four days is [7,2,1,2] and the
 *   price of the stock today is 2, then the span of today is 4 because starting from
 *   today, the price of the stock was less than or equal 2 for 4 consecutive days.
 *
 * - Also, if the prices of the stock in the last four days is [7,34,1,2] and the price
 *   of the stock today is 8, then the span of today is 3 because starting from today,
 *   the price of the stock was less than or equal 8 for 3 consecutive days.
 *
 * Implement the StockSpanner class:
 * - StockSpanner() Initializes the object of the class.
 * - int next(int price) Returns the span of the stock's price given that today's
 *   price is price.
 */

var StockSpanner = function() {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let count = 1;

  while (this.stack.length && price >= this.stack[this.stack.length - 1][0]) {
    count += this.stack[this.stack.length - 1][1];
    this.stack.pop();
  }

  this.stack.push([price, count]);

  return count;
};
