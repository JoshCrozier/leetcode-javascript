/**
 * 991. Broken Calculator
 * https://leetcode.com/problems/broken-calculator/
 * Difficulty: Medium
 *
 * There is a broken calculator that has the integer startValue on its display initially.
 * In one operation, you can:
 * - multiply the number on display by 2, or
 * - subtract 1 from the number on display.
 *
 * Given two integers startValue and target, return the minimum number of operations needed
 * to display target on the calculator.
 */

/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
  let operations = 0;
  let current = target;

  while (current > startValue) {
    if (current % 2 === 0) {
      current = current / 2;
    } else {
      current++;
    }
    operations++;
  }

  return operations + startValue - current;
};
