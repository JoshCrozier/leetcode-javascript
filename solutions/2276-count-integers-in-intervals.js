/**
 * 2276. Count Integers in Intervals
 * https://leetcode.com/problems/count-integers-in-intervals/
 * Difficulty: Hard
 *
 * Given an empty set of intervals, implement a data structure that can:
 * - Add an interval to the set of intervals.
 * - Count the number of integers that are present in at least one interval.
 *
 * Implement the CountIntervals class:
 * - CountIntervals() Initializes the object with an empty set of intervals.
 * - void add(int left, int right) Adds the interval [left, right] to the set of intervals.
 * - int count() Returns the number of integers that are present in at least one interval.
 *
 * Note that an interval [left, right] denotes all the integers x where left <= x <= right.
 */

var CountIntervals = function() {
  this.coverage = 0;
  this.intervals = [[-Infinity, -Infinity], [Infinity, Infinity]];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
CountIntervals.prototype.add = function(left, right) {
  function bisectLeft(arr, target) {
    let low = 0;
    let high = arr.length;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid][0] < target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }

  function bisectRight(arr, target) {
    let low = 0;
    let high = arr.length;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid][0] <= target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }

  let li = bisectLeft(this.intervals, left - 1);
  if (this.intervals[li - 1][1] >= left - 1) {
    li -= 1;
  }

  const lval = Math.min(this.intervals[li][0], left);
  const ri = bisectRight(this.intervals, right + 1);
  const rval = Math.max(this.intervals[ri - 1][1], right);

  let toDelete = 0;
  for (let i = li; i < ri; i++) {
    toDelete += this.intervals[i][1] - this.intervals[i][0] + 1;
  }

  this.coverage += rval - lval + 1 - toDelete;
  this.intervals.splice(li, ri - li, [lval, rval]);
};

/**
 * @return {number}
 */
CountIntervals.prototype.count = function() {
  return this.coverage;
};
