/**
 * 1788. Maximize the Beauty of the Garden
 * https://leetcode.com/problems/maximize-the-beauty-of-the-garden/
 * Difficulty: Hard
 *
 * There is a garden of n flowers, and each flower has an integer beauty value. The flowers
 * are arranged in a line. You are given an integer array flowers of size n and each flowers[i]
 * represents the beauty of the ith flower.
 *
 * A garden is valid if it meets these conditions:
 * - The garden has at least two flowers.
 * - The first and the last flower of the garden have the same beauty value.
 *
 * As the appointed gardener, you have the ability to remove any (possibly none) flowers from
 * the garden. You want to remove flowers in a way that makes the remaining garden valid. The
 * beauty of the garden is the sum of the beauty of all the remaining flowers.
 *
 * Return the maximum possible beauty of some valid garden after you have removed any (possibly
 * none) flowers.
 */

/**
 * @param {number[]} flowers
 * @return {number}
 */
var maximumBeauty = function(flowers) {
  const map = new Map();

  for (let i = 0; i < flowers.length; i++) {
    if (!map.has(flowers[i])) {
      map.set(flowers[i], []);
    }
    map.get(flowers[i]).push(i);
  }

  const prefixSum = new Array(flowers.length + 1).fill(0);
  for (let i = 0; i < flowers.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + Math.max(0, flowers[i]);
  }

  let result = -Infinity;

  for (const [value, indices] of map) {
    if (indices.length >= 2) {
      const firstIndex = indices[0];
      const lastIndex = indices[indices.length - 1];
      const positiveSum = prefixSum[lastIndex] - prefixSum[firstIndex + 1];
      const beauty = 2 * value + positiveSum;
      result = Math.max(result, beauty);
    }
  }

  return result;
};
