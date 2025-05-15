/**
 * 2172. Maximum AND Sum of Array
 * https://leetcode.com/problems/maximum-and-sum-of-array/
 * Difficulty: Hard
 *
 * You are given an integer array nums of length n and an integer numSlots such that
 * 2 * numSlots >= n. There are numSlots slots numbered from 1 to numSlots.
 *
 * You have to place all n integers into the slots such that each slot contains at most
 * two numbers. The AND sum of a given placement is the sum of the bitwise AND of every
 * number with its respective slot number.
 * - For example, the AND sum of placing the numbers [1, 3] into slot 1 and [4, 6] into
 *   slot 2 is equal to (1 AND 1) + (3 AND 1) + (4 AND 2) + (6 AND 2) = 1 + 1 + 0 + 2 = 4.
 *
 * Return the maximum possible AND sum of nums given numSlots slots.
 */

/**
 * @param {number[]} nums
 * @param {number} numSlots
 * @return {number}
 */
var maximumANDSum = function(nums, numSlots) {
  const map = new Map();

  return dp(0, new Array(numSlots).fill(0));

  function dp(index, slots) {
    if (index >= nums.length) return 0;

    const key = `${index},${slots.join(',')}`;
    if (map.has(key)) return map.get(key);

    let result = 0;
    for (let i = 0; i < numSlots; i++) {
      if (slots[i] < 2) {
        slots[i]++;
        result = Math.max(result, (nums[index] & (i + 1)) + dp(index + 1, slots));
        slots[i]--;
      }
    }

    map.set(key, result);
    return result;
  }
};
