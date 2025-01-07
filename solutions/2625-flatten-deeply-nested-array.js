/**
 * 2625. Flatten Deeply Nested Array
 * https://leetcode.com/problems/flatten-deeply-nested-array/
 * Difficulty: Medium
 *
 * Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
 *
 * A multi-dimensional array is a recursive data structure that contains integers or other
 * multi-dimensional arrays.
 *
 * A flattened array is a version of that array with some or all of the sub-arrays removed and
 * replaced with the actual elements in that sub-array. This flattening operation should only
 * be done if the current depth of nesting is less than n. The depth of the elements in the
 * first array are considered to be 0.
 *
 * Please solve it without the built-in Array.flat method.
 */

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function(arr, n) {
  if (n === 0) return arr;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(...(Array.isArray(arr[i]) ? flat(arr[i], n - 1) : [arr[i]]));
  }
  return result;
};
