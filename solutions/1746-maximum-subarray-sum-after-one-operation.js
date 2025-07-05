/**
 * 1746. Maximum Subarray Sum After One Operation
 * https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/
 * Difficulty: Medium
 *
 * You are given an integer array nums. You must perform exactly one operation where you can
 * replace one element nums[i] with nums[i] * nums[i].
 *
 * Return the maximum possible subarray sum after exactly one operation. The subarray must
 * be non-empty.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function(nums) {
  const n = nums.length;
  let maxWithoutSquare = nums[0];
  let maxWithSquare = nums[0] * nums[0];
  let result = maxWithSquare;

  for (let i = 1; i < n; i++) {
    const currentValue = nums[i];
    const squaredValue = currentValue * currentValue;

    const newMaxWithSquare = Math.max(
      squaredValue,
      maxWithoutSquare + squaredValue,
      maxWithSquare + currentValue
    );

    const newMaxWithoutSquare = Math.max(
      currentValue,
      maxWithoutSquare + currentValue
    );

    maxWithSquare = newMaxWithSquare;
    maxWithoutSquare = newMaxWithoutSquare;
    result = Math.max(result, maxWithSquare);
  }

  return result;
};
