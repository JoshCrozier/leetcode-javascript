/**
 * 494. Target Sum
 * https://leetcode.com/problems/target-sum/
 * Difficulty: Medium
 *
 * You are given an integer array nums and an integer target.
 *
 * You want to build an expression out of nums by adding one of the symbols '+' and '-' before
 * each integer in nums and then concatenate all the integers.
 *
 * For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate
 * them to build the expression "+2-1".
 *
 * Return the number of different expressions that you can build, which evaluates to target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  const map = new Map();

  function dp(index, sum) {
    if (index === nums.length) {
      return sum === target ? 1 : 0;
    }
    const key = `${index},${sum}`;
    if (map.has(key)) {
      return map.get(key);
    }
    const r = dp(index + 1, sum + nums[index]) + dp(index + 1, sum - nums[index]);
    map.set(key, r);
    return r;
  }

  return dp(0, 0);
};
