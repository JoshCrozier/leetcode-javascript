/**
 * 2628. JSON Deep Equal
 * https://leetcode.com/problems/json-deep-equal/
 * Difficulty: Medium
 *
 * Given two values o1 and o2, return a boolean value indicating whether two values, o1 and o2,
 * are deeply equal.
 *
 * For two values to be deeply equal, the following conditions must be met:
 * - If both values are primitive types, they are deeply equal if they pass the === equality check.
 * - If both values are arrays, they are deeply equal if they have the same elements in the same
 *   order, and each element is also deeply equal according to these conditions.
 * - If both values are objects, they are deeply equal if they have the same keys, and the
 *   associated values for each key are also deeply equal according to these conditions.
 *
 * You may assume both values are the output of JSON.parse. In other words, they are valid JSON.
 *
 * Please solve it without using lodash's _.isEqual() function
 */

/**
 * @param {null|boolean|number|string|Array|Object} o1
 * @param {null|boolean|number|string|Array|Object} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
  if (o1 === o2) return true;
  if (o1 == null || o2 == null) return false;
  if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;

  if (Array.isArray(o1) !== Array.isArray(o2)) return false;

  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) return false;
    return o1.every((item, index) => areDeeplyEqual(item, o2[index]));
  }

  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);
  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => keys2.includes(key) && areDeeplyEqual(o1[key], o2[key]));
};
