/**
 * 2150. Find All Lonely Numbers in the Array
 * https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/
 * Difficulty: Medium
 *
 * You are given an integer array nums. A number x is lonely when it appears only once, and
 * no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.
 *
 * Return all lonely numbers in nums. You may return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const result = [];
  for (const [num, count] of map) {
    if (count === 1 && !map.has(num - 1) && !map.has(num + 1)) {
      result.push(num);
    }
  }

  return result;
};
