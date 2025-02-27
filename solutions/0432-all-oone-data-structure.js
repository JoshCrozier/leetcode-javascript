/**
 * 432. All O`one Data Structure
 * https://leetcode.com/problems/all-oone-data-structure/
 * Difficulty: Hard
 *
 * Design a data structure to store the strings' count with the ability to return the strings
 * with minimum and maximum counts.
 *
 * Implement the AllOne class:
 * - AllOne() Initializes the object of the data structure.
 * - inc(String key) Increments the count of the string key by 1. If key does not exist in the
 *   data structure, insert it with count 1.
 * - dec(String key) Decrements the count of the string key by 1. If the count of key is 0 after
 *   the decrement, remove it from the data structure. It is guaranteed that key exists in the
 *   data structure before the decrement.
 * - getMaxKey() Returns one of the keys with the maximal count. If no element exists, return
 *   an empty string "".
 * - getMinKey() Returns one of the keys with the minimum count. If no element exists, return
 *   an empty string "".
 *
 * Note that each function must run in O(1) average time complexity.
 */

var AllOne = function() {
  this.map = new Map();
  this.head = { count: 0, keys: new Set(), prev: null, next: null };
  this.tail = { count: Infinity, keys: new Set(), prev: this.head, next: null };
  this.head.next = this.tail;
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
  const node = this.map.get(key) || this.head;
  const count = node.count + 1;
  let next = node.next;

  if (next.count !== count) {
    next = { count, keys: new Set(), prev: node, next: node.next };
    node.next.prev = next;
    node.next = next;
  }

  next.keys.add(key);
  node.keys.delete(key);
  this.map.set(key, next);

  if (node !== this.head && node.keys.size === 0) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
  const node = this.map.get(key);
  const count = node.count - 1;

  node.keys.delete(key);

  if (count === 0) {
    this.map.delete(key);
  } else {
    let prev = node.prev;
    if (prev.count !== count) {
      prev = { count, keys: new Set(), prev: node.prev, next: node };
      node.prev.next = prev;
      node.prev = prev;
    }
    prev.keys.add(key);
    this.map.set(key, prev);
  }

  if (node.keys.size === 0) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  const node = this.tail.prev;
  return node === this.head ? '' : node.keys.values().next().value;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  const node = this.head.next;
  return node === this.tail ? '' : node.keys.values().next().value;
};
