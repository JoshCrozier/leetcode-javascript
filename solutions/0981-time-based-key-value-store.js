/**
 * 981. Time Based Key-Value Store
 * https://leetcode.com/problems/time-based-key-value-store/
 * Difficulty: Medium
 *
 * Design a time-based key-value data structure that can store multiple values for the same key
 * at different time stamps and retrieve the key's value at a certain timestamp.
 *
 * Implement the TimeMap class:
 * - TimeMap() Initializes the object of the data structure.
 * - void set(String key, String value, int timestamp) Stores the key key with the value value
 *   at the given time timestamp.
 * - String get(String key, int timestamp) Returns a value such that set was called previously,
 *   with timestamp_prev <= timestamp. If there are multiple such values, it returns the value
 *   associated with the largest timestamp_prev. If there are no values, it returns "".
 */

var TimeMap = function() {
  this.store = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.store.has(key)) this.store.set(key, []);
  this.store.get(key).push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.store.has(key)) return '';
  const entries = this.store.get(key);
  let left = 0;
  let right = entries.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const [midTime, midValue] = entries[mid];

    if (midTime === timestamp) return midValue;
    if (midTime < timestamp) left = mid + 1;
    else right = mid - 1;
  }

  return right >= 0 ? entries[right][1] : '';
};
