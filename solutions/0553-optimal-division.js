/**
 * 553. Optimal Division
 * https://leetcode.com/problems/optimal-division/
 * Difficulty: Medium
 *
 * You are given an integer array nums. The adjacent integers in nums will perform
 * the float division.
 * - For example, for nums = [2,3,4], we will evaluate the expression "2/3/4".
 *
 * However, you can add any number of parenthesis at any position to change the priority
 * of operations. You want to add these parentheses such the value of the expression after
 * the evaluation is maximum.
 *
 * Return the corresponding expression that has the maximum value in string format.
 *
 * Note: your expression should not contain redundant parenthesis.
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  if (nums.length === 1) return nums[0].toString();
  if (nums.length === 2) return `${nums[0]}/${nums[1]}`;
  return `${nums[0]}/(${nums.slice(1).join('/')})`;
};
