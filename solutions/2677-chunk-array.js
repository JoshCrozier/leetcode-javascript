/**
 * 2677. Chunk Array
 * https://leetcode.com/problems/chunk-array/
 * Difficulty: Easy
 *
 * Given an array arr and a chunk size size, return a chunked array.
 *
 * A chunked array contains the original elements in arr, but consists of subarrays each of
 * length size. The length of the last subarray may be less than size if arr.length is not
 * evenly divisible by size.
 *
 * You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
 *
 * Please solve it without using lodash's _.chunk function.
 */

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  var result = [];

  for (let index = 0; index < arr.length;) {
    result.push(arr.slice(index, index + size));
    index += size;
  }

  return result;
};
