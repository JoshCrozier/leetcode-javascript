/**
 * 2143. Choose Numbers From Two Arrays in Range
 * https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/
 * Difficulty: Hard
 *
 * You are given two 0-indexed integer arrays nums1 and nums2 of length n.
 *
 * A range [l, r] (inclusive) where 0 <= l <= r < n is balanced if:
 * - For every i in the range [l, r], you pick either nums1[i] or nums2[i].
 * - The sum of the numbers you pick from nums1 equals to the sum of the numbers you pick from
 *   nums2 (the sum is considered to be 0 if you pick no numbers from an array).
 *
 * Two balanced ranges from [l1, r1] and [l2, r2] are considered to be different if at least
 * one of the following is true:
 * - l1 != l2
 * - r1 != r2
 * - nums1[i] is picked in the first range, and nums2[i] is picked in the second range or vice
 *   versa for at least one i.
 *
 * Return the number of different ranges that are balanced. Since the answer may be very large,
 * return it modulo 109 + 7.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var countSubranges = function(nums1, nums2) {
  const MOD = 1e9 + 7;
  const n = nums1.length;
  let dp = new Map();
  let result = 0;

  for (let i = 0; i < n; i++) {
    const n1 = nums1[i];
    const n2 = nums2[i];
    const newDp = new Map();

    newDp.set(n1, (newDp.get(n1) || 0) + 1);
    newDp.set(-n2, (newDp.get(-n2) || 0) + 1);

    for (const [key, value] of dp) {
      newDp.set(key + n1, (newDp.get(key + n1) || 0) + value);
      newDp.set(key - n2, (newDp.get(key - n2) || 0) + value);
    }

    for (const [key, value] of newDp) {
      newDp.set(key, value % MOD);
    }

    result = (result + (newDp.get(0) || 0)) % MOD;
    dp = newDp;
  }

  return result;
};
