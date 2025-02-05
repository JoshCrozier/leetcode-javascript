/**
 * 260. Single Number III
 * https://leetcode.com/problems/single-number-iii/
 * Difficulty: Medium
 *
 * Given an integer array nums, in which exactly two elements appear only once and all
 * the other elements appear exactly twice. Find the two elements that appear only once.
 * You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const set = new Set();
  nums.forEach(n => set.has(n) ? set.delete(n) : set.add(n));
  return Array.from(set);
};
