/**
 * 996. Number of Squareful Arrays
 * https://leetcode.com/problems/number-of-squareful-arrays/
 * Difficulty: Hard
 *
 * An array is squareful if the sum of every pair of adjacent elements is a perfect square.
 *
 * Given an integer array nums, return the number of permutations of nums that are squareful.
 *
 * Two permutations perm1 and perm2 are different if there is some index i such that
 * perm1[i] != perm2[i].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numSquarefulPerms = function(nums) {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  const used = new Array(length).fill(false);
  let result = 0;

  generatePermutations(0, length);
  return result;

  function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt);
  }

  function generatePermutations(prevNum, remaining) {
    if (remaining === 0) {
      result++;
      return;
    }

    for (let i = 0; i < length; i++) {
      if (!used[i] && (i === 0 || nums[i] !== nums[i-1] || used[i-1])
          && (remaining === length || isPerfectSquare(prevNum + nums[i]))) {
        used[i] = true;
        generatePermutations(nums[i], remaining - 1);
        used[i] = false;
      }
    }
  }
};
