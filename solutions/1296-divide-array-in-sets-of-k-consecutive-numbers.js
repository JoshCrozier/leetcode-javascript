/**
 * 1296. Divide Array in Sets of K Consecutive Numbers
 * https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/
 * Difficulty: Medium
 *
 * Given an array of integers nums and a positive integer k, find whether it is
 * possible to divide this array into sets of k consecutive numbers.
 *
 * Return true if it is possible. Otherwise, return false.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  if (nums.length % k) {
    return false;
  }

  const map = {};
  const set = new Set(nums);
  nums.forEach(x => map[x] ? map[x]++ : map[x] = 1);

  let count = nums.length / k;
  while (count--) {
    let min = Math.min(...set);
    for (let i = min; i < min + k; i++) {
      if (!map[i]) {
        return false;
      }
      if (!--map[i]) {
        set.delete(i);
      }
    }
  }

  return true;
};
