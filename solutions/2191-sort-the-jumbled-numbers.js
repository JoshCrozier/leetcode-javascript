/**
 * 2191. Sort the Jumbled Numbers
 * https://leetcode.com/problems/sort-the-jumbled-numbers/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array mapping which represents the mapping rule of a shuffled
 * decimal system. mapping[i] = j means digit i should be mapped to digit j in this system.
 *
 * The mapped value of an integer is the new integer obtained by replacing each occurrence of digit
 * i in the integer with mapping[i] for all 0 <= i <= 9.
 *
 * You are also given another integer array nums. Return the array nums sorted in non-decreasing
 * order based on the mapped values of its elements.
 *
 * Notes:
 * - Elements with the same mapped values should appear in the same relative order as in the input.
 * - The elements of nums should only be sorted based on their mapped values and not be replaced by
 *   them.
 */

/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
  const mapped = nums.map((num, index) => {
    let mappedNum = 0;
    let temp = num;

    if (temp === 0) {
      mappedNum = mapping[0];
    } else {
      const digits = [];
      while (temp > 0) {
        digits.push(mapping[temp % 10]);
        temp = Math.floor(temp / 10);
      }
      while (digits.length > 0) {
        mappedNum = mappedNum * 10 + digits.pop();
      }
    }

    return { original: num, mapped: mappedNum, index };
  });

  mapped.sort((a, b) => {
    if (a.mapped === b.mapped) return a.index - b.index;
    return a.mapped - b.mapped;
  });

  return mapped.map(item => item.original);
};
