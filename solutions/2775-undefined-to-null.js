/**
 * 2775. Undefined to Null
 * https://leetcode.com/problems/undefined-to-null/
 * Difficulty: Medium
 *
 * Given a deeply nested object or array obj, return the object obj with any undefined
 * values replaced by null.
 *
 * undefined values are handled differently than null values when objects are converted
 * to a JSON string using JSON.stringify(). This function helps ensure serialized data
 * is free of unexpected errors.
 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var undefinedToNull = function(obj) {
  if (obj === undefined) {
    return null;
  }

  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => undefinedToNull(item));
  }

  const result = {};
  Object.keys(obj).forEach(key => {
    result[key] = undefinedToNull(obj[key]);
  });

  return result;
};
