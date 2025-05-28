/**
 * 2640. Find the Score of All Prefixes of an Array
 * https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/
 * Difficulty: Medium
 *
 * We define the conversion array conver of an array arr as follows:
 * - conver[i] = arr[i] + max(arr[0..i]) where max(arr[0..i]) is the maximum value of
 *   arr[j] over 0 <= j <= i.
 *
 * We also define the score of an array arr as the sum of the values of the conversion array of arr.
 *
 * Given a 0-indexed integer array nums of length n, return an array ans of length n where ans[i]
 * is the score of the prefix nums[0..i].
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
  const result = new Array(nums.length);
  let maxSoFar = 0;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    maxSoFar = Math.max(maxSoFar, nums[i]);
    total += nums[i] + maxSoFar;
    result[i] = total;
  }

  return result;
};
