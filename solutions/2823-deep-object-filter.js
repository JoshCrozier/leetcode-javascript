/**
 * 2823. Deep Object Filter
 * https://leetcode.com/problems/deep-object-filter/
 * Difficulty: Medium
 *
 * Given an object or an array obj and a function fn, return a filtered object or array
 * filteredObject.
 *
 * Function deepFilter should perform a deep filter operation on the obj. The deep filter
 * operation should remove properties for which the output of the filter function fn is
 * false, as well as any empty objects or arrays that remain after the keys have been removed.
 *
 * If the deep filter operation results in an empty object or array, with no remaining
 * properties, deepFilter should return undefined to indicate that there is no valid data
 * left in the filteredObject.
 */

/**
 * @param {Object|Array} obj
 * @param {Function} fn
 * @return {Object|Array|undefined}
 */
var deepFilter = function(obj, fn) {
  if (Array.isArray(obj)) {
    const filteredArray = obj
      .map(item => deepFilter(item, fn))
      .filter(item => item !== undefined);

    return filteredArray.length > 0 ? filteredArray : undefined;
  }

  if (typeof obj === 'object' && obj !== null) {
    const filteredObject = {};
    let hasValidProperties = false;

    Object.keys(obj).forEach(key => {
      const filteredValue = deepFilter(obj[key], fn);
      if (filteredValue !== undefined) {
        filteredObject[key] = filteredValue;
        hasValidProperties = true;
      }
    });

    return hasValidProperties ? filteredObject : undefined;
  }

  return fn(obj) ? obj : undefined;
};
