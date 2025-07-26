/**
 * 3480. Maximize Subarrays After Removing One Conflicting Pair
 * https://leetcode.com/problems/maximize-subarrays-after-removing-one-conflicting-pair/
 * Difficulty: Hard
 *
 * You are given an integer n which represents an array nums containing the numbers from
 * 1 to n in order. Additionally, you are given a 2D array conflictingPairs, where
 * conflictingPairs[i] = [a, b] indicates that a and b form a conflicting pair.
 *
 * Remove exactly one element from conflictingPairs. Afterward, count the number of
 * non-empty subarrays of nums which do not contain both a and b for any remaining
 * conflicting pair [a, b].
 *
 * Return the maximum number of subarrays possible after removing exactly one conflicting pair.
 */

/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
var maxSubarrays = function(n, conflictingPairs) {
  const right = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of conflictingPairs) {
    right[Math.max(a, b)].push(Math.min(a, b));
  }

  let left = [0, 0];
  let total = 0;
  const bonus = new Array(n + 1).fill(0);
  for (let r = 1; r <= n; r++) {
    for (const l of right[r]) {
      if (l > left[0]) {
        left = [l, left[0]];
      } else if (l > left[1]) {
        left = [left[0], l];
      }
    }

    total += r - left[0];

    if (left[0] > 0) {
      bonus[left[0]] += left[0] - left[1];
    }
  }

  return total + Math.max(...bonus);
};
