/**
 * 3362. Zero Array Transformation III
 * https://leetcode.com/problems/zero-array-transformation-iii/
 * Difficulty: Medium
 *
 * You are given an integer array nums of length n and a 2D array queries where
 * queries[i] = [li, ri].
 *
 * Each queries[i] represents the following action on nums:
 * - Decrement the value at each index in the range [li, ri] in nums by at most 1.
 * - The amount by which the value is decremented can be chosen independently for each index.
 *
 * A Zero Array is an array with all its elements equal to 0.
 *
 * Return the maximum number of elements that can be removed from queries, such that nums can
 * still be converted to a zero array using the remaining queries. If it is not possible to
 * convert nums to a zero array, return -1.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function(nums, queries) {
  queries.sort((a, b) => a[0] - b[0]);
  const endIndexHeap = new MaxPriorityQueue();
  const expiredQueries = new Array(nums.length + 1).fill(0);
  let operationCount = 0;
  let queryIndex = 0;

  for (let numIndex = 0; numIndex < nums.length; numIndex++) {
    operationCount -= expiredQueries[numIndex];

    while (queryIndex < queries.length && queries[queryIndex][0] === numIndex) {
      endIndexHeap.push(queries[queryIndex][1]);
      queryIndex++;
    }

    while (
      operationCount < nums[numIndex] && !endIndexHeap.isEmpty() && endIndexHeap.front() >= numIndex
    ) {
      operationCount++;
      expiredQueries[endIndexHeap.pop() + 1]++;
    }

    if (operationCount < nums[numIndex]) {
      return -1;
    }
  }

  return endIndexHeap.size();
};
