/**
 * 982. Triples with Bitwise AND Equal To Zero
 * https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/
 * Difficulty: Hard
 *
 * Given an integer array nums, return the number of AND triples.
 *
 * An AND triple is a triple of indices (i, j, k) such that:
 * - 0 <= i < nums.length
 * - 0 <= j < nums.length
 * - 0 <= k < nums.length
 * - nums[i] & nums[j] & nums[k] == 0, where & represents the bitwise-AND operator.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function(nums) {
  const map = new Map();

  for (const first of nums) {
    for (const second of nums) {
      const pairAnd = first & second;
      map.set(pairAnd, (map.get(pairAnd) || 0) + 1);
    }
  }

  let result = 0;
  for (const third of nums) {
    for (const [pair, count] of map) {
      if ((pair & third) === 0) {
        result += count;
      }
    }
  }

  return result;
};
