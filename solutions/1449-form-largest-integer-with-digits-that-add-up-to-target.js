/**
 * 1449. Form Largest Integer With Digits That Add up to Target
 * https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
 * Difficulty: Hard
 *
 * Given an array of integers cost and an integer target, return the maximum integer you can
 * paint under the following rules:
 * - The cost of painting a digit (i + 1) is given by cost[i] (0-indexed).
 * - The total cost used must be equal to target.
 * - The integer does not have 0 digits.
 *
 * Since the answer may be very large, return it as a string. If there is no way to paint any
 * integer given the condition, return "0".
 */

/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function(cost, target) {
  const maxDigits = new Array(target + 1).fill('0');
  maxDigits[0] = '';

  for (let current = 1; current <= target; current++) {
    for (let digit = 1; digit <= 9; digit++) {
      const prev = current - cost[digit - 1];
      if (prev >= 0 && maxDigits[prev] !== '0') {
        const candidate = digit + maxDigits[prev];
        if (candidate.length > maxDigits[current].length
            || (candidate.length === maxDigits[current].length && candidate > maxDigits[current])) {
          maxDigits[current] = candidate;
        }
      }
    }
  }

  return maxDigits[target];
};
