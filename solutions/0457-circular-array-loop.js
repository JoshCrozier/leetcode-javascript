/**
 * 457. Circular Array Loop
 * https://leetcode.com/problems/circular-array-loop/
 * Difficulty: Medium
 *
 * You are playing a game involving a circular array of non-zero integers nums. Each nums[i]
 * denotes the number of indices forward/backward you must move if you are located at index i:
 * - If nums[i] is positive, move nums[i] steps forward, and
 * - If nums[i] is negative, move nums[i] steps backward.
 *
 * Since the array is circular, you may assume that moving forward from the last element puts
 * you on the first element, and moving backwards from the first element puts you on the last
 * element.
 *
 * A cycle in the array consists of a sequence of indices seq of length k where:
 * - Following the movement rules above results in the repeating index sequence seq[0] -> seq[1]
 *   -> ... -> seq[k - 1] -> seq[0] -> ...
 * - Every nums[seq[j]] is either all positive or all negative.
 * - k > 1
 *
 * Return true if there is a cycle in nums, or false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (dfs(i, i, nums[i] > 0)) return true;
  }

  return false;

  function dfs(current, prev, flag) {
    if (nums[current] === 0) return current != prev;
    if (flag != (nums[current] > 0)) return false;
    const moves = nums[current];
    nums[current] = 0;
    const next = (current + (moves % n) + n) % n;
    const result = dfs(next, current, flag);
    nums[current] = moves;
    return result;
  }
};
