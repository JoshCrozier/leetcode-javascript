/**
 * 359. Logger Rate Limiter
 * https://leetcode.com/problems/logger-rate-limiter/
 * Difficulty: Easy
 *
 * Design a logger system that receives a stream of messages along with their timestamps.
 * Each unique message should only be printed at most every 10 seconds (i.e. a message
 * printed at timestamp t will prevent other identical messages from being printed until
 * timestamp t + 10).
 *
 * All messages will come in chronological order. Several messages may arrive at the same timestamp.
 *
 * Implement the Logger class:
 * - Logger() Initializes the logger object.
 * - bool shouldPrintMessage(int timestamp, string message) Returns true if the message should
 *   be printed in the given timestamp, otherwise returns false.
 */

var Logger = function() {
  this.messageTimestamps = new Map();
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  const nextAllowed = this.messageTimestamps.get(message) || 0;
  if (timestamp >= nextAllowed) {
    this.messageTimestamps.set(message, timestamp + 10);
    return true;
  }
  return false;
};
