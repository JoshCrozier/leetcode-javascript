/**
 * 276. Paint Fence
 * https://leetcode.com/problems/paint-fence/
 * Difficulty: Medium
 *
 * You are painting a fence of n posts with k different colors. You must paint the posts following
 * these rules:
 * - Every post must be painted exactly one color.
 * - There cannot be three or more consecutive posts with the same color.
 *
 * Given the two integers n and k, return the number of ways you can paint the fence.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
  if (n === 1) return k;
  if (n === 2) return k * k;

  let same = k;
  let diff = k * (k - 1);

  for (let i = 3; i <= n; i++) {
    const prevSame = same;
    same = diff;
    diff = (prevSame + diff) * (k - 1);
  }

  return same + diff;
};
