/**
 * 2698. Find the Punishment Number of an Integer
 * https://leetcode.com/problems/find-the-punishment-number-of-an-integer/
 * Difficulty: Medium
 *
 * Given a positive integer n, return the punishment number of n.
 *
 * The punishment number of n is defined as the sum of the squares of all integers i such that:
 * - 1 <= i <= n
 * - The decimal representation of i * i can be partitioned into contiguous substrings such that
 *   the sum of the integer values of these substrings equals i.
 */

/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
  function canPartition(num, target, start) {
    if (!target && start === num.length) {
      return true;
    } else if (start >= num.length) {
      return false;
    }
    for (let i = start, sum = 0; i < num.length; i++) {
      sum = sum * 10 + +num[i];
      if (sum > target) {
        break;
      } else if (canPartition(num, target - sum, i + 1)) {
        return true;
      }
    }

    return false;
  }

  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (canPartition((i * i).toString(), i, 0)) {
      result += i * i;
    }
  }

  return result;
};
