/**
 * 3018. Maximum Number of Removal Queries That Can Be Processed I
 * https://leetcode.com/problems/maximum-number-of-removal-queries-that-can-be-processed-i/
 * Difficulty: Hard
 *
 * You are given a 0-indexed array nums and a 0-indexed array queries.
 *
 * You can do the following operation at the beginning at most once:
 * - Replace nums with a subsequence of nums.
 *
 * We start processing queries in the given order; for each query, we do the following:
 * - If the first and the last element of nums is less than queries[i], the processing of
 *   queries ends.
 * - Otherwise, we choose either the first or the last element of nums if it is greater
 *   than or equal to queries[i], and we remove the chosen element from nums.
 *
 * Return the maximum number of queries that can be processed by doing the operation optimally.
 */

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number}
 */
var maximumProcessableQueries = function(nums, queries) {
  const queryCount = queries.length;
  const arrayLength = nums.length;
  const dp = new Array(arrayLength + 1).fill().map(() => new Array(arrayLength + 1).fill(0));

  nums.push(-1);
  let result = 0;

  for (let segmentLength = arrayLength - 1; segmentLength >= 0; segmentLength--) {
    for (let leftIndex = 0; leftIndex < arrayLength; leftIndex++) {
      const rightIndex = leftIndex + segmentLength;

      if (rightIndex < arrayLength) {
        dp[leftIndex][rightIndex] = Math.max(
          dp[leftIndex - 1] ? dp[leftIndex - 1][rightIndex] : 0,
          dp[leftIndex][rightIndex + 1] || 0
        );

        const prevLeftQueries = dp[leftIndex - 1] ? dp[leftIndex - 1][rightIndex] : 0;
        const prevRightQueries = dp[leftIndex][rightIndex + 1] || 0;
        if (prevLeftQueries < queryCount && nums[leftIndex - 1] >= queries[prevLeftQueries]) {
          dp[leftIndex][rightIndex] = Math.max(dp[leftIndex][rightIndex], prevLeftQueries + 1);
        }

        if (prevRightQueries < queryCount && nums[rightIndex + 1] >= queries[prevRightQueries]) {
          dp[leftIndex][rightIndex] = Math.max(dp[leftIndex][rightIndex], prevRightQueries + 1);
        }

        if (dp[leftIndex][rightIndex] === queryCount) {
          return queryCount;
        }
      } else {
        break;
      }
    }
  }

  for (let singleIndex = 0; singleIndex < arrayLength; singleIndex++) {
    const currentQueries = dp[singleIndex][singleIndex];
    const canProcessCurrent = currentQueries < queryCount
      && nums[singleIndex] >= queries[currentQueries] ? 1 : 0;
    result = Math.max(result, currentQueries + canProcessCurrent);
  }

  return result;
};
