/**
 * 2675. Array of Objects to Matrix
 * https://leetcode.com/problems/array-of-objects-to-matrix/
 * Difficulty: Hard
 *
 * Write a function that converts an array of objects arr into a matrix m.
 *
 * arr is an array of objects or arrays. Each item in the array can be deeply nested with child
 * arrays and child objects. It can also contain numbers, strings, booleans, and null values.
 *
 * The first row m should be the column names. If there is no nesting, the column names are the
 * unique keys within the objects. If there is nesting, the column names are the respective paths
 * in the object separated by ".".
 *
 * Each of the remaining rows corresponds to an object in arr. Each value in the matrix corresponds
 * to a value in an object. If a given object doesn't contain a value for a given column, the cell
 * should contain an empty string "".
 *
 * The columns in the matrix should be in lexographically ascending order.
 */

/**
 * @param {Array} arr
 * @return {(string | number | boolean | null)[][]}
 */
var jsonToMatrix = function(arr) {
  const allKeys = Array.from(
    arr.reduce((keySet, item) => {
      extractKeys(item).forEach(key => keySet.add(key));
      return keySet;
    }, new Set())
  ).sort();

  return [allKeys, ...arr.map(item => allKeys.map(key => getValue(item, key)))];

  function isObject(value) {
    return value !== null && typeof value === 'object';
  }

  function extractKeys(object) {
    if (!isObject(object)) return [''];
    const keys = [];
    for (const key of Object.keys(object)) {
      const childKeys = extractKeys(object[key]);
      for (const childKey of childKeys) {
        keys.push(childKey ? `${key}.${childKey}` : key);
      }
    }
    return keys;
  }

  function getValue(obj, path) {
    const segments = path.split('.');
    let current = obj;
    let index = 0;

    while (index < segments.length && isObject(current)) {
      current = current[segments[index++]];
    }

    return index < segments.length || isObject(current) || current === undefined ? '' : current;
  }
};
