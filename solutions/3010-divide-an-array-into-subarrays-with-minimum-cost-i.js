/**
 * 3010. Divide an Array Into Subarrays With Minimum Cost I
 * https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/
 * Difficulty: Easy
 *
 * You are given an array of integers nums of length n.
 *
 * The cost of an array is the value of its first element. For example, the cost of [1,2,3]
 * is 1 while the cost of [3,4,1] is 3.
 *
 * You need to divide nums into 3 disjoint contiguous subarrays.
 *
 * Return the minimum possible sum of the cost of these subarrays.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
  const n = nums.length;
  let result = Infinity;

  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const cost = nums[0] + nums[i] + nums[j];
      result = Math.min(result, cost);
    }
  }

  return result;
};
