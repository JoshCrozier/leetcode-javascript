/**
 * 2899. Last Visited Integers
 * https://leetcode.com/problems/last-visited-integers/
 * Difficulty: Easy
 *
 * Given an integer array nums where nums[i] is either a positive integer or -1. We need to find
 * for each -1 the respective positive integer, which we call the last visited integer.
 *
 * To achieve this goal, let's define two empty arrays: seen and ans.
 *
 * Start iterating from the beginning of the array nums.
 * - If a positive integer is encountered, prepend it to the front of seen.
 * - If -1 is encountered, let k be the number of consecutive -1s seen so far (including the
 *   current -1),
 *   - If k is less than or equal to the length of seen, append the k-th element of seen to ans.
 *   - If k is strictly greater than the length of seen, append -1 to ans.
 *
 * Return the array ans.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function(nums) {
  const seen = [];
  const result = [];
  let consecutiveNegatives = 0;

  for (const num of nums) {
    if (num > 0) {
      seen.unshift(num);
      consecutiveNegatives = 0;
    } else {
      consecutiveNegatives++;
      result.push(consecutiveNegatives <= seen.length ? seen[consecutiveNegatives - 1] : -1);
    }
  }

  return result;
};
