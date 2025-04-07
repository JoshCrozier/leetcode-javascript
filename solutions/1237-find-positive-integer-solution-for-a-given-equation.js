/**
 * 1237. Find Positive Integer Solution for a Given Equation
 * https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/
 * Difficulty: Medium
 *
 * Given a callable function f(x, y) with a hidden formula and a value z, reverse engineer
 * the formula and return all positive integer pairs x and y where f(x,y) == z. You may
 * return the pairs in any order.
 *
 * While the exact formula is hidden, the function is monotonically increasing, i.e.:
 * - f(x, y) < f(x + 1, y)
 * - f(x, y) < f(x, y + 1)
 */

/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
function findSolution(customfunction, z) {
  const pairs = [];
  let left = 1;
  let right = 1000;

  while (left <= 1000 && right >= 1) {
    const value = customfunction.f(left, right);
    if (value === z) {
      pairs.push([left, right]);
      left++;
      right--;
    } else if (value < z) {
      left++;
    } else {
      right--;
    }
  }

  return pairs;
}
