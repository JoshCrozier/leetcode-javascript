/**
 * 1186. Maximum Subarray Sum with One Deletion
 * https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/
 * Difficulty: Medium
 *
 * Given an array of integers, return the maximum sum for a non-empty subarray (contiguous elements)
 * with at most one element deletion. In other words, you want to choose a subarray and optionally
 * delete one element from it so that there is still at least one element left and the sum of the
 * remaining elements is maximum possible.
 *
 * Note that the subarray needs to be non-empty after deleting one element.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
  let maxNoDelete = arr[0];
  let maxOneDelete = 0;
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const prevMaxNoDelete = maxNoDelete;
    maxNoDelete = Math.max(arr[i], maxNoDelete + arr[i]);
    maxOneDelete = Math.max(prevMaxNoDelete, maxOneDelete + arr[i]);
    result = Math.max(result, maxNoDelete, maxOneDelete);
  }

  return result;
};
