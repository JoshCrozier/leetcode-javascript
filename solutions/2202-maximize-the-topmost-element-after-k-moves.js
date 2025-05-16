/**
 * 2202. Maximize the Topmost Element After K Moves
 * https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums representing the contents of a pile, where nums[0]
 * is the topmost element of the pile.
 *
 * In one move, you can perform either of the following:
 * - If the pile is not empty, remove the topmost element of the pile.
 * - If there are one or more removed elements, add any one of them back onto the pile. This element
 *   becomes the new topmost element.
 *
 * You are also given an integer k, which denotes the total number of moves to be made.
 *
 * Return the maximum value of the topmost element of the pile possible after exactly k moves. In
 * case it is not possible to obtain a non-empty pile after k moves, return -1.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function(nums, k) {
  const n = nums.length;

  if (n === 1 && k % 2 === 1) return -1;
  if (k === 0) return nums[0];
  if (k === 1) return n > 1 ? nums[1] : -1;

  let result = 0;
  for (let i = 0; i < Math.min(k - 1, n); i++) {
    result = Math.max(result, nums[i]);
  }

  if (k < n) {
    result = Math.max(result, nums[k]);
  }

  return result;
};
