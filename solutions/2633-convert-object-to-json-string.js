/**
 * 2633. Convert Object to JSON String
 * https://leetcode.com/problems/convert-object-to-json-string/
 * Difficulty: Medium
 *
 * Given a value, return a valid JSON string of that value. The value can be a string, number,
 * array, object, boolean, or null. The returned string should not include extra spaces. The
 * order of keys should be the same as the order returned by Object.keys().
 *
 * Please solve it without using the built-in JSON.stringify method.
 */

/**
 * @param {null|boolean|number|string|Array|Object} object
 * @return {string}
 */
var jsonStringify = function(object) {
  if (object === null) return 'null';
  if (typeof object === 'boolean' || typeof object === 'number') return String(object);
  if (typeof object === 'string') return `"${object}"`;

  if (Array.isArray(object)) {
    const elements = object.map(item => jsonStringify(item));
    return `[${elements.join(',')}]`;
  }

  const pairs = Object.keys(object).map(key => `"${key}":${jsonStringify(object[key])}`);
  return `{${pairs.join(',')}}`;
};
