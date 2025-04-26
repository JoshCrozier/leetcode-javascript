/**
 * 1674. Minimum Moves to Make Array Complementary
 * https://leetcode.com/problems/minimum-moves-to-make-array-complementary/
 * Difficulty: Medium
 *
 * You are given an integer array nums of even length n and an integer limit. In one move, you
 * can replace any integer from nums with another integer between 1 and limit, inclusive.
 *
 * The array nums is complementary if for all indices i (0-indexed), nums[i] + nums[n - 1 - i]
 * equals the same number. For example, the array [1,2,3,4] is complementary because for all
 * indices i, nums[i] + nums[n - 1 - i] = 5.
 *
 * Return the minimum number of moves required to make nums complementary.
 */

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function(nums, limit) {
  const n = nums.length;
  const delta = new Array(2 * limit + 2).fill(0);
  let result = n;

  for (let i = 0; i < n / 2; i++) {
    const left = nums[i];
    const right = nums[n - 1 - i];
    const minSum = Math.min(left, right) + 1;
    const maxSum = Math.max(left, right) + limit;
    delta[2] += 2;
    delta[minSum] -= 1;
    delta[left + right] -= 1;
    delta[left + right + 1] += 1;
    delta[maxSum + 1] += 1;
  }

  let moves = 0;
  for (let i = 2; i <= 2 * limit; i++) {
    moves += delta[i];
    result = Math.min(result, moves);
  }

  return result;
};
