/**
 * 705. Design HashSet
 * https://leetcode.com/problems/design-hashset/
 * Difficulty: Easy
 *
 * Design a HashSet without using any built-in hash table libraries.
 *
 * Implement MyHashSet class:
 * - void add(key) Inserts the value key into the HashSet.
 * - bool contains(key) Returns whether the value key exists in the
 *   HashSet or not.
 * - void remove(key) Removes the value key in the HashSet. If key
 *   does not exist in the HashSet, do nothing.
 */

var MyHashSet = function() {
  this._keys = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  this._keys[key] = 1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  this._keys[key] = undefined;
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return this._keys[key] !== undefined;
};
