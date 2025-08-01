/**
 * 2343. Query Kth Smallest Trimmed Number
 * https://leetcode.com/problems/query-kth-smallest-trimmed-number/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of strings nums, where each string is of equal length
 * and consists of only digits.
 *
 * You are also given a 0-indexed 2D integer array queries where queries[i] = [ki, trimi].
 * For each queries[i], you need to:
 * - Trim each number in nums to its rightmost trimi digits.
 * - Determine the index of the kith smallest trimmed number in nums. If two trimmed numbers
 *   are equal, the number with the lower index is considered to be smaller.
 * - Reset each number in nums to its original length.
 *
 * Return an array answer of the same length as queries, where answer[i] is the answer to
 * the ith query.
 *
 * Note:
 * - To trim to the rightmost x digits means to keep removing the leftmost digit, until only
 *   x digits remain.
 * - Strings in nums may contain leading zeros.
 */

/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function(nums, queries) {
  if (nums.length === 0) return [];

  const result = [];
  const stringLength = nums[0].length;
  let startIndex = 0;

  const maxHeap = new PriorityQueue((a, b) => {
    for (let i = startIndex; i < stringLength; i++) {
      if (nums[a].charAt(i) !== nums[b].charAt(i)) {
        return nums[b].charAt(i).charCodeAt(0) - nums[a].charAt(i).charCodeAt(0);
      }
    }
    return b - a;
  });

  for (let i = 0; i < queries.length; i++) {
    startIndex = stringLength - queries[i][1];
    maxHeap.clear();

    for (let j = 0; j < nums.length; j++) {
      maxHeap.enqueue(j);
      if (maxHeap.size() > queries[i][0]) {
        maxHeap.dequeue();
      }
    }

    result[i] = maxHeap.dequeue();
  }

  return result;
};
