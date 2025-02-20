/**
 * 239. Sliding Window Maximum
 * https://leetcode.com/problems/sliding-window-maximum/
 * Difficulty: Hard
 *
 * You are given an array of integers nums, there is a sliding window of size k which is moving
 * from the very left of the array to the very right. You can only see the k numbers in the
 * window. Each time the sliding window moves right by one position.
 *
 * Return the max sliding window.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const result = [];
  const queue = [];

  for (let i = 0; i < nums.length; i++) {
    while (queue.length && queue[0] < i - k + 1) {
      queue.shift();
    }
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }
    queue.push(i);
    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
};
