/**
 * 677. Map Sum Pairs
 * https://leetcode.com/problems/map-sum-pairs/
 * Difficulty: Medium
 *
 * Design a map that allows you to do the following:
 * - Maps a string key to a given value.
 * - Returns the sum of the values that have a key with a prefix equal to a given string.
 *
 * Implement the MapSum class:
 * - MapSum() Initializes the MapSum object.
 * - void insert(String key, int val) Inserts the key-val pair into the map. If the key
 *   already existed, the original key-value pair will be overridden to the new one.
 * - int sum(string prefix) Returns the sum of all the pairs' value whose key starts
 *   with the prefix.
 */

var MapSum = function() {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.map.set(key, val);
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  return [...this.map.entries()].reduce((total, [key, val]) => {
    return key.startsWith(prefix) ? total + val : total;
  }, 0);
};
