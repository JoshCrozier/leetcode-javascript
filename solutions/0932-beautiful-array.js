/**
 * 932. Beautiful Array
 * https://leetcode.com/problems/beautiful-array/
 * Difficulty: Medium
 *
 * An array nums of length n is beautiful if:
 * - nums is a permutation of the integers in the range [1, n].
 * - For every 0 <= i < j < n, there is no index k with i < k < j where
 * 2 * nums[k] == nums[i] + nums[j].
 *
 * Given the integer n, return any beautiful array nums of length n.
 * There will be at least one valid answer for the given n.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
  const memo = new Map();
  return helper(n);

  function helper(size) {
    if (memo.has(size)) return memo.get(size);
    if (size === 1) return [1];

    const odds = helper(Math.ceil(size / 2));
    const evens = helper(Math.floor(size / 2));
    const result = [
      ...odds.map(x => x * 2 - 1),
      ...evens.map(x => x * 2)
    ];

    memo.set(size, result);
    return result;
  }
};
