/**
 * 1656. Design an Ordered Stream
 * https://leetcode.com/problems/design-an-ordered-stream/
 * Difficulty: Easy
 *
 * There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is
 * an integer between 1 and n and value is a string. No two pairs have the same id.
 *
 * Design a stream that returns the values in increasing order of their IDs by returning a chunk
 * (list) of values after each insertion. The concatenation of all the chunks should result in a
 * list of the sorted values.
 *
 * Implement the OrderedStream class:
 * - OrderedStream(int n) Constructs the stream to take n values.
 * - String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream,
 *   then returns the largest possible chunk of currently inserted values that appear next in
 *   the order.
 */

/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.stream = new Array(n).fill(null);
  this.nextIndex = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  const index = idKey - 1;
  this.stream[index] = value;

  if (index !== this.nextIndex) return [];

  const result = [];
  while (this.nextIndex < this.stream.length && this.stream[this.nextIndex] !== null) {
    result.push(this.stream[this.nextIndex]);
    this.nextIndex++;
  }

  return result;
};
