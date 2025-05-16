/**
 * 2210. Count Hills and Valleys in an Array
 * https://leetcode.com/problems/count-hills-and-valleys-in-an-array/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the
 * closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part
 * of a valley in nums if the closest non-equal neighbors of i are larger than nums[i].
 * Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].
 *
 * Note that for an index to be part of a hill or valley, it must have a non-equal neighbor
 * on both the left and right of the index.
 *
 * Return the number of hills and valleys in nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
  let count = 0;
  let prev = nums[0];

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) continue;
    const left = prev;
    const right = nums[i + 1];

    if ((nums[i] > left && nums[i] > right) || (nums[i] < left && nums[i] < right)) {
      count++;
    }

    prev = nums[i];
  }

  return count;
};
