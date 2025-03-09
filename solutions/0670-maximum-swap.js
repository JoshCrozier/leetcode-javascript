/**
 * 670. Maximum Swap
 * https://leetcode.com/problems/maximum-swap/
 * Difficulty: Medium
 *
 * You are given an integer num. You can swap two digits at most once to get the maximum
 * valued number.
 *
 * Return the maximum valued number you can get.
 */

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const digits = [...(num).toString()];
  const last = new Array(10).fill(-1);
  digits.forEach((d, i) => last[d] = i);

  for (let i = 0; i < digits.length; i++) {
    for (let d = 9; d > digits[i]; d--) {
      if (last[d] > i) {
        [digits[i], digits[last[d]]] = [digits[last[d]], digits[i]];
        return +digits.join('');
      }
    }
  }

  return num;
};
