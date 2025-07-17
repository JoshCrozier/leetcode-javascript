/**
 * 2964. Number of Divisible Triplet Sums
 * https://leetcode.com/problems/number-of-divisible-triplet-sums/
 * Difficulty: Medium
 *
 * Given a 0-indexed integer array nums and an integer d, return the number of triplets
 * (i, j, k) such that i < j < k and (nums[i] + nums[j] + nums[k]) % d == 0.
 */

/**
 * @param {number[]} nums
 * @param {number} d
 * @return {number}
 */
var divisibleTripletCount = function(nums, d) {
  const n = nums.length;
  const pairSums = new Map();

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const sumMod = (nums[i] + nums[j]) % d;
      if (!pairSums.has(sumMod)) {
        pairSums.set(sumMod, []);
      }
      pairSums.get(sumMod).push([i, j]);
    }
  }

  let result = 0;
  for (let k = 0; k < n; k++) {
    const targetKey = (d - nums[k] % d) % d;
    if (pairSums.has(targetKey)) {
      for (const [i, j] of pairSums.get(targetKey)) {
        if (j < k) {
          result++;
        }
      }
    }
  }

  return result;
};
