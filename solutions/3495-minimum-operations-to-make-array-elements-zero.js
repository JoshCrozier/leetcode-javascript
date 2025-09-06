/**
 * 3495. Minimum Operations to Make Array Elements Zero
 * https://leetcode.com/problems/minimum-operations-to-make-array-elements-zero/
 * Difficulty: Hard
 *
 * You are given a 2D array queries, where queries[i] is of the form [l, r]. Each
 * queries[i] defines an array of integers nums consisting of elements ranging
 * from l to r, both inclusive.
 *
 * In one operation, you can:
 * - Select two integers a and b from the array.
 * - Replace them with floor(a / 4) and floor(b / 4).
 *
 * Your task is to determine the minimum number of operations required to reduce all
 * elements of the array to zero for each query. Return the sum of the results for
 * all queries.
 */

/**
 * @param {number[][]} queries
 * @return {number}
 */
var minOperations = function(queries) {
  let result = 0;

  for (const [start, end] of queries) {
    let operationsNeeded = 0;

    for (let depth = 1, previousBound = 1; depth < 17; depth++) {
      const currentBound = previousBound * 4;
      const intersectionLeft = Math.max(start, previousBound);
      const intersectionRight = Math.min(end, currentBound - 1);

      if (intersectionRight >= intersectionLeft) {
        operationsNeeded += (intersectionRight - intersectionLeft + 1) * depth;
      }
      previousBound = currentBound;
    }

    result += Math.ceil(operationsNeeded / 2);
  }

  return result;
};
