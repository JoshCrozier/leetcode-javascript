/**
 * 380. Insert Delete GetRandom O(1)
 * https://leetcode.com/problems/insert-delete-getrandom-o1/
 * Difficulty: Medium
 *
 * Implement the RandomizedSet class:
 * - RandomizedSet() Initializes the RandomizedSet object.
 * - bool insert(int val) Inserts an item val into the set if not present. Returns true if the
 *   item was not present, false otherwise.
 * - bool remove(int val) Removes an item val from the set if present. Returns true if the item
 *   was present, false otherwise.
 * - int getRandom() Returns a random element from the current set of elements (it's guaranteed
 *   that at least one element exists when this method is called). Each element must have the
 *   same probability of being returned.
 *
 * You must implement the functions of the class such that each function works in average O(1)
 * time complexity.
 */


var RandomizedSet = function() {
  this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  const hasValue = this.set.has(val);
  this.set.add(val);
  return !hasValue;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  const hasValue = this.set.has(val);
  this.set.delete(val);
  return hasValue;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const item = Array.from(this.set);
  const randomIndex = Math.floor(Math.random() * item.length);
  return item[randomIndex];
};
