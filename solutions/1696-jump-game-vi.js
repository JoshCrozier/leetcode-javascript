/**
 * 1696. Jump Game VI
 * https://leetcode.com/problems/jump-game-vi/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array nums and an integer k.
 *
 * You are initially standing at index 0. In one move, you can jump at most k steps forward without
 * going outside the boundaries of the array. That is, you can jump from index i to any index in
 * the range [i + 1, min(n - 1, i + k)] inclusive.
 *
 * You want to reach the last index of the array (index n - 1). Your score is the sum of all
 * nums[j] for each index j you visited in the array.
 *
 * Return the maximum score you can get.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
  const n = nums.length;
  const maxScores = new Array(n).fill(-Infinity);
  const deque = [];

  maxScores[0] = nums[0];
  deque.push(0);

  for (let i = 1; i < n; i++) {
    while (deque.length && deque[0] < i - k) {
      deque.shift();
    }

    maxScores[i] = nums[i] + maxScores[deque[0]];

    while (deque.length && maxScores[i] >= maxScores[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(i);
  }

  return maxScores[n - 1];
};
