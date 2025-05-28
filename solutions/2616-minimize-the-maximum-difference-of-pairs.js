/**
 * 2616. Minimize the Maximum Difference of Pairs
 * https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums and an integer p. Find p pairs of indices
 * of nums such that the maximum difference amongst all the pairs is minimized. Also, ensure
 * no index appears more than once amongst the p pairs.
 *
 * Note that for a pair of elements at the index i and j, the difference of this pair is
 * |nums[i] - nums[j]|, where |x| represents the absolute value of x.
 *
 * Return the minimum maximum difference among all p pairs. We define the maximum of an empty
 * set to be zero.
 */

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  let left = 0;
  let right = nums[n - 1] - nums[0];
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canFormPairs(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;

  function canFormPairs(maxDiff) {
    let pairs = 0;
    for (let i = 0; i < n - 1 && pairs < p; i += 2) {
      if (nums[i + 1] - nums[i] <= maxDiff) {
        pairs++;
      } else {
        i--;
      }
    }
    return pairs >= p;
  }
};
