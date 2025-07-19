/**
 * 3299. Sum of Consecutive Subsequences
 * https://leetcode.com/problems/sum-of-consecutive-subsequences/
 * Difficulty: Hard
 *
 * We call an array arr of length n consecutive if one of the following holds:
 * - arr[i] - arr[i - 1] == 1 for all 1 <= i < n.
 * - arr[i] - arr[i - 1] == -1 for all 1 <= i < n.
 *
 * The value of an array is the sum of its elements.
 *
 * For example, [3, 4, 5] is a consecutive array of value 12 and [9, 8] is another of
 * value 17. While [3, 4, 3] and [8, 6] are not consecutive.
 *
 * Given an array of integers nums, return the sum of the values of all consecutive
 * non-empty subsequences.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 *
 * Note that an array of length 1 is also considered consecutive.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var getSum = function(nums) {
  const MOD = 1e9 + 7;
  const singleElementSum = nums.reduce((sum, num) => (sum + num) % MOD, 0);

  return (getSubSum(nums, 1) + getSubSum(nums, -1) + singleElementSum) % MOD;

  function getSubSum(nums, direction) {
    const count = new Array(100002).fill(0);
    const sum = new Array(100002).fill(0);
    let result = 0;

    for (const num of nums) {
      const prev = num - direction;
      const sumAtNum = (sum[prev] + num * (count[prev] + 1)) % MOD;
      result = (result + sumAtNum - num + MOD) % MOD;
      sum[num] = (sum[num] + sumAtNum) % MOD;
      count[num] = (count[num] + count[prev] + 1) % MOD;
    }

    return result;
  }
};
