/**
 * 1646. Get Maximum in Generated Array
 * https://leetcode.com/problems/get-maximum-in-generated-array/
 * Difficulty: Easy
 *
 * You are given an integer n. A 0-indexed integer array nums of length n + 1 is generated
 * in the following way:
 * - nums[0] = 0
 * - nums[1] = 1
 * - nums[2 * i] = nums[i] when 2 <= 2 * i <= n
 * - nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
 *
 * Return the maximum integer in the array nums.
 */

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  if (n === 0) return 0;

  const generatedArray = new Array(n + 1).fill(0);
  generatedArray[1] = 1;
  let maximumValue = 1;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (2 * i <= n) {
      generatedArray[2 * i] = generatedArray[i];
      maximumValue = Math.max(maximumValue, generatedArray[2 * i]);
    }
    if (2 * i + 1 <= n) {
      generatedArray[2 * i + 1] = generatedArray[i] + generatedArray[i + 1];
      maximumValue = Math.max(maximumValue, generatedArray[2 * i + 1]);
    }
  }

  return maximumValue;
};
