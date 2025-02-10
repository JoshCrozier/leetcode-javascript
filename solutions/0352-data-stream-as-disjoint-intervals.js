/**
 * 352. Data Stream as Disjoint Intervals
 * https://leetcode.com/problems/data-stream-as-disjoint-intervals/
 * Difficulty: Hard
 *
 * Given a data stream input of non-negative integers a1, a2, ..., an, summarize the
 * numbers seen so far as a list of disjoint intervals.
 *
 * Implement the SummaryRanges class:
 * - SummaryRanges() Initializes the object with an empty stream.
 * - void addNum(int value) Adds the integer value to the stream.
 * - int[][] getIntervals() Returns a summary of the integers in the stream currently as
 *   a list of disjoint intervals [starti, endi]. The answer should be sorted by starti.
 */

var SummaryRanges = function() {
  this.list = [];
};

/**
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
  this.list[value] = true;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
  const result = [];

  for (let i = 0; i < this.list.length; i++) {
    if (this.list[i]) {
      let j = i;
      while (this.list[j]) {
        j++;
      }
      result.push([i, j - 1]);
      i = j;
    }
  }

  return result;
};
