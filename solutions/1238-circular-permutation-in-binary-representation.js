/**
 * 1238. Circular Permutation in Binary Representation
 * https://leetcode.com/problems/circular-permutation-in-binary-representation/
 * Difficulty: Medium
 *
 * Given 2 integers n and start. Your task is return any permutation p of (0,1,2.....,2^n -1)
 * such that:
 * - p[0] = start
 * - p[i] and p[i+1] differ by only one bit in their binary representation.
 * - p[0] and p[2^n -1] must also differ by only one bit in their binary representation.
 */

/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {
  return helper(n).map(num => num ^ start);
};

function helper(n) {
  const sequence = [0];
  for (let i = 0; i < n; i++) {
    const mirror = sequence.slice().reverse();
    const power = 1 << i;
    for (let j = 0; j < mirror.length; j++) {
      sequence.push(mirror[j] + power);
    }
  }
  return sequence;
}
