/**
 * 3037. Find Pattern in Infinite Stream II
 * https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/
 * Difficulty: Hard
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
  const failureFunction = buildFailureFunction(pattern);
  let streamIndex = 0;
  let patternIndex = 0;

  while (true) {
    const streamBit = stream.next();

    while (patternIndex > 0 && pattern[patternIndex] !== streamBit) {
      patternIndex = failureFunction[patternIndex - 1];
    }

    if (pattern[patternIndex] === streamBit) {
      patternIndex++;
    }

    if (patternIndex === patternLength) {
      return streamIndex - patternLength + 1;
    }

    streamIndex++;
  }

  function buildFailureFunction(pattern) {
    const failure = new Array(pattern.length).fill(0);
    let prefixLength = 0;

    for (let suffixEnd = 1; suffixEnd < pattern.length; suffixEnd++) {
      while (prefixLength > 0 && pattern[prefixLength] !== pattern[suffixEnd]) {
        prefixLength = failure[prefixLength - 1];
      }

      if (pattern[prefixLength] === pattern[suffixEnd]) {
        prefixLength++;
      }

      failure[suffixEnd] = prefixLength;
    }

    return failure;
  }
};
