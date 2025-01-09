/**
 * 2705. Compact Object
 * https://leetcode.com/problems/compact-object/
 * Difficulty: Medium
 *
 * Given an object or array obj, return a compact object.
 *
 * A compact object is the same as the original object, except with keys containing falsy
 * values removed. This operation applies to the object and any nested objects. Arrays are
 * considered objects where the indices are keys. A value is considered falsy when
 * Boolean(value) returns false.
 *
 * You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== 'object') return obj;

  return Object.keys(obj).reduce((result, key) => {
    const value = compactObject(obj[key]);
    if (value) {
      result[key] = value;
    }
    return result;
  }, {});
};
