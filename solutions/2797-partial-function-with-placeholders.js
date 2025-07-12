/**
 * 2797. Partial Function with Placeholders
 * https://leetcode.com/problems/partial-function-with-placeholders/
 * Difficulty: Easy
 *
 * Given a function fn and an array args, return a function partialFn.
 *
 * Placeholders "_" in the args should be replaced with values from restArgs starting from
 * index 0. Any remaining values in the restArgs should be added at the end of the args.
 *
 * partialFn should return a result of fn. fn should be called with the elements of the
 * modified args passed as separate arguments.
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @return {Function}
 */
var partial = function(fn, args) {
  return function(...restArgs) {
    const finalArgs = [...args];
    let restIndex = 0;

    for (let i = 0; i < finalArgs.length; i++) {
      if (finalArgs[i] === '_' && restIndex < restArgs.length) {
        finalArgs[i] = restArgs[restIndex];
        restIndex++;
      }
    }

    while (restIndex < restArgs.length) {
      finalArgs.push(restArgs[restIndex]);
      restIndex++;
    }

    return fn(...finalArgs);
  };
};
