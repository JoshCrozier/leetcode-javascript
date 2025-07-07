/**
 * 2113. Elements in Array After Removing and Replacing Elements
 * https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums. Initially on minute 0, the array is unchanged.
 * Every minute, the leftmost element in nums is removed until no elements remain. Then, every
 * minute, one element is appended to the end of nums, in the order they were removed in, until
 * the original array is restored. This process repeats indefinitely.
 * - For example, the array [0,1,2] would change as follows: [0,1,2] → [1,2] → [2] → [] → [0] →
 *   [0,1] → [0,1,2] → [1,2] → [2] → [] → [0] → [0,1] → [0,1,2] → ...
 *
 * You are also given a 2D integer array queries of size n where queries[j] = [timej, indexj].
 * The answer to the jth query is:
 * - nums[indexj] if indexj < nums.length at minute timej
 * - -1 if indexj >= nums.length at minute timej
 *
 * Return an integer array ans of size n where ans[j] is the answer to the jth query.
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var elementInNums = function(nums, queries) {
  const n = nums.length;
  const cycleLength = 2 * n;

  return queries.map(([time, index]) => {
    const position = time % cycleLength;

    if (position < n) {
      const currentLength = n - position;
      return index < currentLength ? nums[position + index] : -1;
    } else {
      const currentLength = position - n;
      return index < currentLength ? nums[index] : -1;
    }
  });
};
