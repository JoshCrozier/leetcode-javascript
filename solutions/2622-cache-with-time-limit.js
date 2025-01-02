/**
 * 2622. Cache With Time Limit
 * https://leetcode.com/problems/cache-with-time-limit/
 * Difficulty: Medium
 *
 * Write a class that allows getting and setting key-value pairs, however a time until
 * expiration is associated with each key.
 *
 * The class has three public methods:
 * - set(key, value, duration): accepts an integer key, an integer value, and a duration
 *   in milliseconds. Once the duration has elapsed, the key should be inaccessible.
 *   The method should return true if the same un-expired key already exists and false
 *   otherwise. Both the value and duration should be overwritten if the key already exists.
 *
 * - get(key): if an un-expired key exists, it should return the associated value.
 *   Otherwise it should return -1.
 *
 * - count(): returns the count of un-expired keys.
 */

var TimeLimitedCache = function() {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const hit = this.cache.has(key) && this.cache.get(key)[1] > Date.now();
  this.cache.set(key, [value, Date.now() + duration]);
  return hit;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  if (!this.cache.has(key)) return -1;
  const [value, expiredAt] = this.cache.get(key);
  return expiredAt > Date.now() ? value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  return [...this.cache.keys()].reduce((count, key) => {
    return this.cache.get(key)[1] > Date.now() ? ++count : count;
  }, 0);
};
