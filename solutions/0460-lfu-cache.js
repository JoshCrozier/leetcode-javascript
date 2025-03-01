/**
 * 460. LFU Cache
 * https://leetcode.com/problems/lfu-cache/
 * Difficulty: Hard
 *
 * Design and implement a data structure for a Least Frequently Used (LFU) cache.
 *
 * Implement the LFUCache class:
 * - LFUCache(int capacity) Initializes the object with the capacity of the data structure.
 * - int get(int key) Gets the value of the key if the key exists in the cache. Otherwise,
 *   returns -1.
 * - void put(int key, int value) Update the value of the key if present, or inserts the
 *   key if not already present. When the cache reaches its capacity, it should invalidate
 *   and remove the least frequently used key before inserting a new item. For this problem,
 *   when there is a tie (i.e., two or more keys with the same frequency), the least recently
 *   used key would be invalidated.
 *
 * To determine the least frequently used key, a use counter is maintained for each key in
 * the cache. The key with the smallest use counter is the least frequently used key.
 *
 * When a key is first inserted into the cache, its use counter is set to 1 (due to the
 * put operation). The use counter for a key in the cache is incremented either a get or
 * put operation is called on it.
 *
 * The functions get and put must each run in O(1) average time complexity.
 */

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.minFreq = 0;
  this.values = new Map();
  this.freq = new Map();
  this.keys = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if (!this.values.has(key)) return -1;

  const freq = this.freq.get(key);
  this.freq.set(key, freq + 1);

  this.keys.get(freq).delete(key);
  if (!this.keys.get(freq).size) {
    this.keys.delete(freq);
    if (this.minFreq === freq) this.minFreq++;
  }

  if (!this.keys.has(freq + 1)) this.keys.set(freq + 1, new Set());
  this.keys.get(freq + 1).add(key);

  return this.values.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (this.capacity === 0) return;

  if (this.values.has(key)) {
    this.values.set(key, value);
    this.get(key);
    return;
  }

  if (this.size === this.capacity) {
    const keyToRemove = this.keys.get(this.minFreq).values().next().value;
    this.keys.get(this.minFreq).delete(keyToRemove);
    if (!this.keys.get(this.minFreq).size) {
      this.keys.delete(this.minFreq);
    }
    this.values.delete(keyToRemove);
    this.freq.delete(keyToRemove);
    this.size--;
  }

  this.values.set(key, value);
  this.freq.set(key, 1);
  if (!this.keys.has(1)) this.keys.set(1, new Set());
  this.keys.get(1).add(key);
  this.minFreq = 1;
  this.size++;
};
