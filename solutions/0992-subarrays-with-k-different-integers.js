/**
 * 992. Subarrays with K Different Integers
 * https://leetcode.com/problems/subarrays-with-k-different-integers/
 * Difficulty: Hard
 *
 * Given an integer array nums and an integer k, return the number of good subarrays of nums.
 *
 * A good array is an array where the number of different integers in that array is exactly k.
 *
 * For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
 *
 * A subarray is a contiguous part of an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
  return countAtMostK(k) - countAtMostK(k - 1);

  function countAtMostK(distinct) {
    const map = new Map();
    let left = 0;
    let result = 0;

    for (let right = 0; right < nums.length; right++) {
      map.set(nums[right], (map.get(nums[right]) || 0) + 1);

      while (map.size > distinct) {
        map.set(nums[left], map.get(nums[left]) - 1);
        if (map.get(nums[left]) === 0) {
          map.delete(nums[left]);
        }
        left++;
      }

      result += right - left + 1;
    }

    return result;
  }
};
