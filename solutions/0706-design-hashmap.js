/**
 * 706. Design HashMap
 * https://leetcode.com/problems/design-hashmap/
 * Difficulty: Easy
 *
 * Design a HashMap without using any built-in hash table libraries.
 * Implement the MyHashMap class:
 * - MyHashMap() initializes the object with an empty map.
 * - void put(int key, int value) inserts a (key, value) pair into the HashMap.
 *   If the key already exists in the map, update the corresponding value.
 * - int get(int key) returns the value to which the specified key is mapped,
 *   or -1 if this map contains no mapping for the key.
 * - void remove(key) removes the key and its corresponding value if the map
 *   contains the mapping for the key.
 */


var MyHashMap = function() {
  this._keys = [];
  this._values = [];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  if (this._keys[key] === undefined) {
    this._values.push(value);
    this._keys[key] = this._values.length - 1;
  } else {
    this._values[this._keys[key]] = value;
  }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  const offset = this._keys[key];
  return offset === undefined ? -1 : this._values[offset];
}
/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  if (this._keys[key] !== undefined) {
    this._values[this._keys[key]] = undefined;
    this._keys[key] = undefined;
  }
};
