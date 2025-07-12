/**
 * 2700. Differences Between Two Objects
 * https://leetcode.com/problems/differences-between-two-objects/
 * Difficulty: Medium
 *
 * Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns
 * a new object representing their differences.
 *
 * The function should compare the properties of the two objects and identify any changes.
 * The returned object should only contains keys where the value is different from obj1 to obj2.
 *
 * For each changed key, the value should be represented as an array [obj1 value, obj2 value].
 * Keys that exist in one object but not in the other should not be included in the returned
 * object. The end result should be a deeply nested object where each leaf value is a
 * difference array.
 *
 * When comparing two arrays, the indices of the arrays are considered to be their keys.
 *
 * You may assume that both objects are the output of JSON.parse.
 */

/**
 * @param {Object|Array} obj1
 * @param {Object|Array} obj2
 * @return {Object|Array}
 */
function objDiff(obj1, obj2) {
  if (obj1 === obj2) return {};

  if (obj1 === null || obj2 === null || typeof obj1 !== typeof obj2
    || typeof obj1 !== 'object') {
    return [obj1, obj2];
  }

  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return [obj1, obj2];
  }

  const result = {};
  for (const key in obj1) {
    if (key in obj2) {
      const difference = objDiff(obj1[key], obj2[key]);
      if (Object.keys(difference).length > 0 || Array.isArray(difference)) {
        result[key] = difference;
      }
    }
  }

  return result;
}
