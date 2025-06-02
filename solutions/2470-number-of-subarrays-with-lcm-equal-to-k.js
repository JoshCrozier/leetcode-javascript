/**
 * 2470. Number of Subarrays With LCM Equal to K
 * https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/
 * Difficulty: Medium
 *
 * Given an integer array nums and an integer k, return the number of subarrays of nums
 * where the least common multiple of the subarray's elements is k.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * The least common multiple of an array is the smallest positive integer that is divisible
 * by all the array elements.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function(nums, k) {
  let count = 0;

  for (let start = 0; start < nums.length; start++) {
    let currentLCM = nums[start];
    for (let end = start; end < nums.length; end++) {
      currentLCM = lcm(currentLCM, nums[end]);
      if (currentLCM > k) break;
      if (currentLCM === k) count++;
    }
  }

  return count;

  function gcd(a, b) {
    while (b) {
      a %= b;
      [a, b] = [b, a];
    }
    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
};
