/**
 * 2206. Divide Array Into Equal Pairs
 * https://leetcode.com/problems/divide-array-into-equal-pairs/
 * Difficulty: Easy
 *
 * You are given an integer array nums consisting of 2 * n integers.
 *
 * You need to divide nums into n pairs such that:
 * - Each element belongs to exactly one pair.
 * - The elements present in a pair are equal.
 *
 * Return true if nums can be divided into n pairs, otherwise return false.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const count of map.values()) {
    if (count % 2 !== 0) {
      return false;
    }
  }

  return true;
};
