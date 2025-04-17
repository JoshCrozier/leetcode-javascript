/**
 * 2176. Count Equal and Divisible Pairs in an Array
 * https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/
 * Difficulty: Easy
 *
 * Given a 0-indexed integer array nums of length n and an integer k, return the number of
 * pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
  const frequencyMap = new Map();
  let result = 0;

  nums.forEach((num, index) => {
    if (frequencyMap.has(num)) {
      const values = frequencyMap.get(num);
      values.forEach(prevIndex => {
        if ((prevIndex * index) % k === 0) {
          result++;
        }
      });
      values.push(index);
    } else {
      frequencyMap.set(num, [index]);
    }
  });

  return result;
};
