/**
 * 2122. Recover the Original Array
 * https://leetcode.com/problems/recover-the-original-array/
 * Difficulty: Hard
 *
 * Alice had a 0-indexed array arr consisting of n positive integers. She chose an arbitrary
 * positive integer k and created two new 0-indexed integer arrays lower and higher in the
 * following manner:
 * 1. lower[i] = arr[i] - k, for every index i where 0 <= i < n
 * 2. higher[i] = arr[i] + k, for every index i where 0 <= i < n
 *
 * Unfortunately, Alice lost all three arrays. However, she remembers the integers that were
 * present in the arrays lower and higher, but not the array each integer belonged to. Help
 * Alice and recover the original array.
 *
 * Given an array nums consisting of 2n integers, where exactly n of the integers were present
 * in lower and the remaining in higher, return the original array arr. In case the answer is
 * not unique, return any valid array.
 *
 * Note: The test cases are generated such that there exists at least one valid array arr.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var recoverArray = function(nums) {
  const n = nums.length / 2;
  nums.sort((a, b) => a - b);

  for (let i = 1; i < 2 * n; i++) {
    const k = nums[i] - nums[0];
    if (k <= 0 || k % 2 !== 0) continue;

    const original = [];
    const used = new Array(2 * n).fill(false);
    let count = 0;

    for (let left = 0, right = i; right < 2 * n && count < n; right++) {
      while (left < right && used[left]) left++;
      if (left >= right) continue;

      if (nums[right] - nums[left] === k) {
        original.push(nums[left] + k / 2);
        used[left] = used[right] = true;
        count++;
        left++;
      }
    }

    if (count === n) return original;
  }

  return [];
};
