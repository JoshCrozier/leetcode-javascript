/**
 * 2795. Parallel Execution of Promises for Individual Results Retrieval
 * https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/
 * Difficulty: Medium
 *
 * Given an array functions, return a promise promise. functions is an array of functions that
 * return promises fnPromise. Each fnPromise can be resolved or rejected.
 *
 * If fnPromise is resolved:
 *
 *     obj = { status: "fulfilled", value: resolved value}
 *
 * If fnPromise is rejected:
 *
 *     obj = { status: "rejected", reason: reason of rejection (catched error message)}
 *
 * The promise should resolve with an array of these objects obj. Each obj in the array should
 * correspond to the promises in the original array function, maintaining the same order.
 *
 * Try to implement it without using the built-in method Promise.allSettled().
 */

/**
 * @param {Array<Function>} functions
 * @return {Promise<Array>}
 */
var promiseAllSettled = function(functions) {
  return new Promise(resolve => {
    const results = new Array(functions.length);
    let completedCount = 0;

    functions.forEach((fn, index) => {
      fn().then(value => results[index] = { status: 'fulfilled', value })
        .catch(reason => results[index] = { status: 'rejected', reason })
        .finally(() => {
          completedCount++;
          if (completedCount === functions.length) {
            resolve(results);
          }
        });
    });
  });
};
