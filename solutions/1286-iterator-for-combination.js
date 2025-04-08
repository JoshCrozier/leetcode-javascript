/**
 * 1286. Iterator for Combination
 * https://leetcode.com/problems/iterator-for-combination/
 * Difficulty: Medium
 *
 * Design the CombinationIterator class:
 * - CombinationIterator(string characters, int combinationLength) Initializes the object with a
 *   string characters of sorted distinct lowercase English letters and a number combinationLength
 *   as arguments.
 * - next() Returns the next combination of length combinationLength in lexicographical order.
 * - hasNext() Returns true if and only if there exists a next combination.
 */

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
  this.chars = characters;
  this.length = combinationLength;
  this.indices = new Array(combinationLength).fill(0).map((_, i) => i);
  this.hasMore = true;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
  const result = this.indices.map(i => this.chars[i]).join('');

  this.hasMore = false;
  for (let i = this.length - 1; i >= 0; i--) {
    if (this.indices[i] < this.chars.length - (this.length - i)) {
      this.indices[i]++;
      for (let j = i + 1; j < this.length; j++) {
        this.indices[j] = this.indices[j - 1] + 1;
      }
      this.hasMore = true;
      break;
    }
  }

  return result;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
  return this.hasMore;
};
