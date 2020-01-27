/**
 * 565. Array Nesting
 * https://leetcode.com/problems/array-nesting/
 * Difficulty: Medium
 *
 * A zero-indexed array A of length N contains all integers from 0 to N-1.
 * Find and return the longest length of set S, where S[i] = {A[i],
 * A[A[i]], A[A[A[i]]], ... } subjected to the rule below.
 *
 * Suppose the first element in S starts with the selection of element
 * A[i] of index = i, the next element in S should be A[A[i]], and then
 * A[A[A[i]]]… By that analogy, we stop adding right before a duplicate
 * element occurs in S.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  const history = new Set();
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let j = i;
    while (!history.has(nums[j])) {
      j = nums[j];
      history.add(j);
      count++;
    }
    max = Math.max(max, count);
  }
  return max;
};
