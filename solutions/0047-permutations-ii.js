/**
 * 47. Permutations II
 * https://leetcode.com/problems/permutations-ii/
 * Difficulty: Medium
 *
 * Given a collection of numbers, nums, that might contain duplicates,
 * return all possible unique permutations in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = new Set();
  backtrack(result, nums);
  return Array.from(result).map(s => s.split(','));
};

function backtrack(result, nums, order = []) {
  if (!nums.length) {
    result.add(order.join());
  } else {
    for (let i = 0; i < nums.length; i++) {
      backtrack(
        result,
        [...nums.slice(0, i), ...nums.slice(i + 1)],
        [...order, nums[i]],
      );
    }
  }
}
