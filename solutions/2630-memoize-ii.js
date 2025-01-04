/**
 * 2630. Memoize II
 * https://leetcode.com/problems/memoize-ii/
 * Difficulty: Hard
 *
 * Given a function fn, return a memoized version of that function.
 *
 * A memoized function is a function that will never be called twice
 * with the same inputs. Instead it will return a cached value.
 *
 * fn can be any function and there are no constraints on what type
 * of values it accepts. Inputs are considered identical if they
 * are === to each other.
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};
  const idLookup = new Map();
  function generateId(item) {
    return idLookup.get(item) ?? idLookup.set(item, idLookup.size + 1).get(item);
  }
  return (...args) => {
    const key = args.map(generateId).join('-');
    return !cache.hasOwnProperty(key) ? (cache[key] = fn(...args)) : cache[key];
  };
}
