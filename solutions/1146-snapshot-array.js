/**
 * 1146. Snapshot Array
 * https://leetcode.com/problems/snapshot-array/
 * Difficulty: Medium
 *
 * Implement a SnapshotArray that supports the following interface:
 * - SnapshotArray(int length) initializes an array-like data structure with the given length.
 *   Initially, each element equals 0.
 * - void set(index, val) sets the element at the given index to be equal to val.
 * - int snap() takes a snapshot of the array and returns the snapId: the total number of times
 *   we called snap() minus 1.
 * - int get(index, snapId) returns the value at the given index, at the time we took the
 *   snapshot with the given snapId
 */

/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.history = new Map();
  this.snapshots = 0;
  this.length = length;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  const current = this.history.get(this.snapshots) || new Map();
  current.set(index, val);
  this.history.set(this.snapshots, current);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  return this.snapshots++;
};

/**
 * @param {number} index
 * @param {number} snapId
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snapId) {
  for (let id = snapId; id >= 0; id--) {
    const snapshot = this.history.get(id);
    if (snapshot && snapshot.has(index)) {
      return snapshot.get(index);
    }
  }
  return 0;
};
