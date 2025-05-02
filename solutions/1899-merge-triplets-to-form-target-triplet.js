/**
 * 1899. Merge Triplets to Form Target Triplet
 * https://leetcode.com/problems/merge-triplets-to-form-target-triplet/
 * Difficulty: Medium
 *
 * A triplet is an array of three integers. You are given a 2D integer array triplets, where
 * triplets[i] = [ai, bi, ci] describes the ith triplet. You are also given an integer array
 * target = [x, y, z] that describes the triplet you want to obtain.
 *
 * To obtain target, you may apply the following operation on triplets any number of times
 * (possibly zero):
 * - Choose two indices (0-indexed) i and j (i != j) and update triplets[j] to become
 *   [max(ai, aj), max(bi, bj), max(ci, cj)].
 *   - For example, if triplets[i] = [2, 5, 3] and triplets[j] = [1, 7, 5], triplets[j] will
 *     be updated to [max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5].
 *
 * Return true if it is possible to obtain the target triplet [x, y, z] as an element of triplets,
 * or false otherwise.
 */

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
  let canFormX = false;
  let canFormY = false;
  let canFormZ = false;

  for (const [a, b, c] of triplets) {
    if (a <= target[0] && b <= target[1] && c <= target[2]) {
      if (a === target[0]) canFormX = true;
      if (b === target[1]) canFormY = true;
      if (c === target[2]) canFormZ = true;
    }
  }

  return canFormX && canFormY && canFormZ;
};
