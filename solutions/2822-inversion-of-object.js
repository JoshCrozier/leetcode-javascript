/**
 * 2822. Inversion of Object
 * https://leetcode.com/problems/inversion-of-object/
 * Difficulty: Easy
 *
 * Given an object or an array obj, return an inverted object or array invertedObj.
 *
 * The invertedObj should have the keys of obj as values and the values of obj as keys.
 * The indices of array should be treated as keys.
 *
 * The function should handle duplicates, meaning that if there are multiple keys in obj
 * with the same value, the invertedObj should map the value to an array containing all
 * corresponding keys.
 *
 * It is guaranteed that the values in obj are only strings.
 */

/**
 * @param {Object|Array} obj
 * @return {Object}
 */
var invertObject = function(obj) {
  const result = {};

  Object.keys(obj).forEach(key => {
    const value = obj[key];

    if (result[value] === undefined) {
      result[value] = key;
    } else if (Array.isArray(result[value])) {
      result[value].push(key);
    } else {
      result[value] = [result[value], key];
    }
  });

  return result;
};
