/**
 * 381. Insert Delete GetRandom O(1) - Duplicates allowed
 * https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/
 * Difficulty: Hard
 *
 * RandomizedCollection is a data structure that contains a collection of numbers, possibly
 * duplicates (i.e., a multiset). It should support inserting and removing specific elements
 * and also reporting a random element.
 *
 * Implement the RandomizedCollection class:
 * - RandomizedCollection() Initializes the empty RandomizedCollection object.
 * - bool insert(int val) Inserts an item val into the multiset, even if the item is already
 *   present. Returns true if the item is not present, false otherwise.
 * - bool remove(int val) Removes an item val from the multiset if present. Returns true if
 *   the item is present, false otherwise. Note that if val has multiple occurrences in the
 *   multiset, we only remove one of them.
 * - int getRandom() Returns a random element from the current multiset of elements. The
 *   probability of each element being returned is linearly related to the number of the same
 *   values the multiset contains.
 *
 * You must implement the functions of the class such that each function works on average O(1)
 * time complexity.
 *
 * Note: The test cases are generated such that getRandom will only be called if there is at
 * least one item in the RandomizedCollection.
 */

var RandomizedCollection = function() {
  this.values = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  this.values.push(val);
  const values = this.map.get(val) || new Set();
  values.add(this.values.length - 1);
  this.map.set(val, values);
  return values.size === 1;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if (!this.map.has(val)) return false;
  const values = this.map.get(val);
  const index = values.values().next().value;
  values.delete(index);
  if (index < this.values.length - 1) {
    const last = this.values.pop();
    this.values[index] = last;
    const lastValues = this.map.get(last);
    lastValues.delete(this.values.length);
    lastValues.add(index);
  } else {
    this.values.pop();
  }
  if (!values.size) {
    this.map.delete(val);
  }
  return true;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  return this.values[Math.floor(Math.random() * this.values.length)];
};
