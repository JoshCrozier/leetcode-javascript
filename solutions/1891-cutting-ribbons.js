/**
 * 1891. Cutting Ribbons
 * https://leetcode.com/problems/cutting-ribbons/
 * Difficulty: Medium
 *
 * You are given an integer array ribbons, where ribbons[i] represents the length of the ith
 * ribbon, and an integer k. You may cut any of the ribbons into any number of segments of
 * positive integer lengths, or perform no cuts at all.
 *
 * - For example, if you have a ribbon of length 4, you can:
 *   - Keep the ribbon of length 4,
 *   - Cut it into one ribbon of length 3 and one ribbon of length 1,
 *   - Cut it into two ribbons of length 2,
 *   - Cut it into one ribbon of length 2 and two ribbons of length 1, or
 *   - Cut it into four ribbons of length 1.
 *
 * Your task is to determine the maximum length of ribbon, x, that allows you to cut at least
 * k ribbons, each of length x. You can discard any leftover ribbon from the cuts. If it is
 * impossible to cut k ribbons of the same length, return 0.
 */

/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function(ribbons, k) {
  let left = 1;
  let right = Math.max(...ribbons);
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (helper(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;

  function helper(length) {
    let count = 0;
    for (const ribbon of ribbons) {
      count += Math.floor(ribbon / length);
      if (count >= k) return true;
    }
    return false;
  }
};
