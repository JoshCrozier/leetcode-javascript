/**
 * 158. Read N Characters Given read4 II - Call Multiple Times
 * https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/
 * Difficulty: Hard
 *
 * Given a file and assume that you can only read the file using a given method read4, implement
 * a method read to read n characters. Your method read may be called multiple times.
 *
 * Method read4:
 * - The API read4 reads four consecutive characters from file, then writes those characters into
 *   the buffer array buf4.
 *
 * The return value is the number of actual characters read.
 *
 * Note that read4() has its own file pointer, much like FILE *fp in C.
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  let cache = [];
  let cacheIndex = 0;
  let cacheSize = 0;

  /**
    * @param {character[]} buf Destination buffer
    * @param {number} n Number of characters to read
    * @return {number} The number of actual characters read
    */
  return function(buf, n) {
    let charsRead = 0;

    while (charsRead < n) {
      if (cacheIndex >= cacheSize) {
        cache = new Array(4);
        cacheSize = read4(cache);
        cacheIndex = 0;
        if (cacheSize === 0) break;
      }

      buf[charsRead++] = cache[cacheIndex++];
    }

    return charsRead;
  };
};
