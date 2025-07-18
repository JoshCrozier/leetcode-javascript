/**
 * 3167. Better Compression of String
 * https://leetcode.com/problems/better-compression-of-string/
 * Difficulty: Medium
 *
 * You are given a string compressed representing a compressed version of a string. The format
 * is a character followed by its frequency. For example, "a3b1a1c2" is a compressed version
 * of the string "aaabacc".
 *
 * We seek a better compression with the following conditions:
 * 1. Each character should appear only once in the compressed version.
 * 2. The characters should be in alphabetical order.
 *
 * Return the better compression of compressed.
 *
 * Note: In the better version of compression, the order of letters may change, which is acceptable.
 */

/**
 * @param {string} compressed
 * @return {string}
 */
var betterCompression = function(compressed) {
  const map = new Map();
  let i = 0;

  while (i < compressed.length) {
    const char = compressed[i];
    i++;

    let frequency = '';
    while (i < compressed.length && !isNaN(compressed[i])) {
      frequency += compressed[i];
      i++;
    }

    const count = parseInt(frequency);
    map.set(char, (map.get(char) || 0) + count);
  }

  const sortedChars = [...map.keys()].sort();
  const result = sortedChars.map(char => char + map.get(char)).join('');

  return result;
};
