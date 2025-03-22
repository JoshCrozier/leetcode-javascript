/**
 * 900. RLE Iterator
 * https://leetcode.com/problems/rle-iterator/
 * Difficulty: Medium
 *
 * We can use run-length encoding (i.e., RLE) to encode a sequence of integers. In a run-length
 * encoded array of even length encoding (0-indexed), for all even i, encoding[i] tells us the
 * number of times that the non-negative integer value encoding[i + 1] is repeated in the sequence.
 * - For example, the sequence arr = [8,8,8,5,5] can be encoded to be encoding = [3,8,2,5].
 *   encoding = [3,8,0,9,2,5] and encoding = [2,8,1,8,2,5] are also valid RLE of arr.
 *
 * Given a run-length encoded array, design an iterator that iterates through it.
 *
 * Implement the RLEIterator class:
 * - RLEIterator(int[] encoded) Initializes the object with the encoded array encoded.
 * - int next(int n) Exhausts the next n elements and returns the last element exhausted in this
 *   way. If there is no element left to exhaust, return -1 instead.
 */

/**
 * @param {number[]} encoding
 */
var RLEIterator = function(encoding) {
  this.pairs = [];
  this.index = 0;
  this.count = 0;

  for (let i = 0; i < encoding.length; i += 2) {
    if (encoding[i] > 0) {
      this.pairs.push([encoding[i], encoding[i + 1]]);
    }
  }
};

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
  while (n > 0 && this.index < this.pairs.length) {
    const available = this.pairs[this.index][0] - this.count;

    if (n <= available) {
      this.count += n;
      return this.pairs[this.index][1];
    }

    n -= available;
    this.count = 0;
    this.index++;
  }

  return -1;
};
