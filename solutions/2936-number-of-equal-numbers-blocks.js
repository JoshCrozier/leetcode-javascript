/**
 * 2936. Number of Equal Numbers Blocks
 * https://leetcode.com/problems/number-of-equal-numbers-blocks/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of integers, nums. The following property holds for nums:
 * - All occurrences of a value are adjacent. In other words, if there are two indices i < j
 *   such that nums[i] == nums[j], then for every index k that i < k < j, nums[k] == nums[i].
 *
 * Since nums is a very large array, you are given an instance of the class BigArray which has
 * the following functions:
 * - int at(long long index): Returns the value of nums[i].
 * - void size(): Returns nums.length.
 *
 * Let's partition the array into maximal blocks such that each block contains equal values.
 * Return the number of these blocks.
 *
 * Note that if you want to test your solution using a custom test, behavior for tests with
 * nums.length > 10 is undefined.
 */

/**
 * Definition for BigArray.
 * class BigArray {
 *     @param {number[]} elements
 *     constructor(elements);
 *
 *     @param {number} index
 *     @return {number}
 *     at(index);
 *
 *     @return {number}
 *     size();
 * }
 */
/**
 * @param {BigArray} nums
 * @return {number}
 */
var countBlocks = function(nums) {
  const n = nums.size();
  if (n === 0) return 0;

  let blocks = 1;
  let currentIndex = 0;

  while (currentIndex < n - 1) {
    const nextBlockStart = findNextBlockStart(nums, currentIndex, n);
    if (nextBlockStart < n) {
      blocks++;
      currentIndex = nextBlockStart;
    } else {
      break;
    }
  }

  return blocks;

  function findNextBlockStart(nums, startIndex, n) {
    const currentValue = nums.at(startIndex);
    let left = startIndex + 1;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums.at(mid) === currentValue) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }
};
