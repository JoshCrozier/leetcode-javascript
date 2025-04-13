/**
 * 1387. Sort Integers by The Power Value
 * https://leetcode.com/problems/sort-integers-by-the-power-value/
 * Difficulty: Medium
 *
 * The power of an integer x is defined as the number of steps needed to transform x into
 * 1 using the following steps:
 * - if x is even then x = x / 2
 * - if x is odd then x = 3 * x + 1
 *
 * For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1
 * (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).
 *
 * Given three integers lo, hi and k. The task is to sort all integers in the interval
 * [lo, hi] by the power value in ascending order, if two or more integers have the same
 * power value sort them by ascending order.
 *
 * Return the kth integer in the range [lo, hi] sorted by the power value.
 *
 * Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform
 * into 1 using these steps and that the power of x is will fit in a 32-bit signed integer.
 */

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
  const powerValues = new Map();
  const numbers = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);

  numbers.sort((a, b) => {
    const powerA = getPower(a);
    const powerB = getPower(b);
    return powerA === powerB ? a - b : powerA - powerB;
  });

  return numbers[k - 1];

  function calculatePower(num) {
    let steps = 0;
    while (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = 3 * num + 1;
      }
      steps++;
    }
    return steps;
  }

  function getPower(num) {
    if (!powerValues.has(num)) {
      powerValues.set(num, calculatePower(num));
    }
    return powerValues.get(num);
  }
};
