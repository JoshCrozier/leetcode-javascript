/**
 * 3023. Find Pattern in Infinite Stream I
 * https://leetcode.com/problems/find-pattern-in-infinite-stream-i/
 * Difficulty: Medium
 *
 * You are given a binary array pattern and an object stream of class InfiniteStream
 * representing a 0-indexed infinite stream of bits.
 *
 * The class InfiniteStream contains the following function:
 * - int next(): Reads a single bit (which is either 0 or 1) from the stream and returns it.
 *
 * Return the first starting index where the pattern matches the bits read from the stream.
 * For example, if the pattern is [1, 0], the first match is the highlighted part in the
 * stream [0, 1, 0, 1, ...].
 */

/**
 * Definition for an infinite stream.
 * class InfiniteStream {
 *     @param {number[]} bits
 *     constructor(bits);
 *
 *     @return {number}
 *     next();
 * }
 */
/**
 * @param {InfiniteStream} stream
 * @param {number[]} pattern
 * @return {number}
 */
var findPattern = function(stream, pattern) {
  const patternLength = pattern.length;
  const buffer = [];
  let currentIndex = 0;

  while (buffer.length < patternLength) {
    buffer.push(stream.next());
  }

  while (true) {
    if (isPatternMatch(buffer, pattern)) {
      return currentIndex;
    }

    buffer.shift();
    buffer.push(stream.next());
    currentIndex++;
  }

  function isPatternMatch(buffer, pattern) {
    for (let i = 0; i < pattern.length; i++) {
      if (buffer[i] !== pattern[i]) {
        return false;
      }
    }
    return true;
  }
};
