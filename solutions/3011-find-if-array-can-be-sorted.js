/**
 * 3011. Find if Array Can Be Sorted
 * https://leetcode.com/problems/find-if-array-can-be-sorted/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of positive integers nums.
 *
 * In one operation, you can swap any two adjacent elements if they have the same number of
 * set bits. You are allowed to do this operation any number of times (including zero).
 *
 * Return true if you can sort the array in ascending order, else return false.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const bitGroups = [];
  let currentBits = countSetBits(nums[0]);
  let group = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const bits = countSetBits(nums[i]);
    if (bits === currentBits) {
      group.push(nums[i]);
    } else {
      bitGroups.push(group);
      group = [nums[i]];
      currentBits = bits;
    }
  }
  bitGroups.push(group);

  let index = 0;
  for (const group of bitGroups) {
    const groupSorted = [...group].sort((a, b) => a - b);
    for (const num of groupSorted) {
      if (num !== sorted[index]) {
        return false;
      }
      index++;
    }
  }

  return true;

  function countSetBits(num) {
    let count = 0;
    while (num) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  }
};
