/**
 * 362. Design Hit Counter
 * https://leetcode.com/problems/design-hit-counter/
 * Difficulty: Medium
 *
 * Design a hit counter which counts the number of hits received in the past 5 minutes
 * (i.e., the past 300 seconds).
 *
 * Your system should accept a timestamp parameter (in seconds granularity), and you may
 * assume that calls are being made to the system in chronological order (i.e., timestamp
 * is monotonically increasing). Several hits may arrive roughly at the same time.
 *
 * Implement the HitCounter class:
 * - HitCounter() Initializes the object of the hit counter system.
 * - void hit(int timestamp) Records a hit that happened at timestamp (in seconds). Several
 *   hits may happen at the same timestamp.
 * - int getHits(int timestamp) Returns the number of hits in the past 5 minutes from timestamp
 *   (i.e., the past 300 seconds).
 */

var HitCounter = function() {
  this.hits = [];
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  this.hits.push(timestamp);
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  const threshold = timestamp - 300;
  while (this.hits.length && this.hits[0] <= threshold) {
    this.hits.shift();
  }
  return this.hits.length;
};
