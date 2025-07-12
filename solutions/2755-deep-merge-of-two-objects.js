/**
 * 2755. Deep Merge of Two Objects
 * https://leetcode.com/problems/deep-merge-of-two-objects/
 * Difficulty: Medium
 *
 * Given two values obj1 and obj2, return a deepmerged value.
 *
 * Values should be deepmerged according to these rules:
 * - If the two values are objects, the resulting object should have all the keys that exist
 *   on either object. If a key belongs to both objects, deepmerge the two associated values.
 *   Otherwise, add the key-value pair to the resulting object.
 * - If the two values are arrays, the resulting array should be the same length as the longer
 *   array. Apply the same logic as you would with objects, but treat the indices as keys.
 * - Otherwise the resulting value is obj2.
 *
 * You can assume obj1 and obj2 are the output of JSON.parse().
 */

/**
 * @param {null|boolean|number|string|Array|Object} obj1
 * @param {null|boolean|number|string|Array|Object} obj2
 * @return {null|boolean|number|string|Array|Object}
 */
var deepMerge = function(obj1, obj2) {
  if (obj2 === null || typeof obj2 !== 'object') {
    return obj2;
  }

  if (obj1 === null || typeof obj1 !== 'object') {
    return obj2;
  }

  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return obj2;
  }

  if (Array.isArray(obj1)) {
    const maxLength = Math.max(obj1.length, obj2.length);
    const result = [];

    for (let i = 0; i < maxLength; i++) {
      if (i < obj2.length) {
        result[i] = deepMerge(obj1[i], obj2[i]);
      } else {
        result[i] = obj1[i];
      }
    }

    return result;
  }

  const result = { ...obj1 };

  Object.keys(obj2).forEach(key => {
    result[key] = deepMerge(obj1[key], obj2[key]);
  });

  return result;
};
