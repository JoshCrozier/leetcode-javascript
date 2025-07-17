/**
 * 3141. Maximum Hamming Distances
 * https://leetcode.com/problems/maximum-hamming-distances/
 * Difficulty: Hard
 *
 * Given an array nums and an integer m, with each element nums[i] satisfying 0 <= nums[i] < 2m,
 * return an array answer. The answer array should be of the same length as nums, where each
 * element answer[i] represents the maximum Hamming distance between nums[i] and any other element
 * nums[j] in the array.
 *
 * The Hamming distance between two binary integers is defined as the number of positions at which
 * the corresponding bits differ (add leading zeroes if needed).
 */

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number[]}
 */
var maxHammingDistances = function(nums, m) {
  const totalSize = 1 << m;
  const maxDistances = new Array(totalSize).fill(-Infinity);

  for (const num of nums) {
    maxDistances[num] = 0;
  }
  for (let bitPosition = 0; bitPosition < m; bitPosition++) {
    const previousDistances = [...maxDistances];
    for (let number = 0; number < totalSize; number++) {
      const flippedNumber = number ^ (1 << bitPosition);
      maxDistances[number] = Math.max(maxDistances[number], previousDistances[flippedNumber] + 1);
    }
  }

  return nums.map(num => maxDistances[num]);
};
