/**
 * 1711. Count Good Meals
 * https://leetcode.com/problems/count-good-meals/
 * Difficulty: Medium
 *
 * A good meal is a meal that contains exactly two different food items with a sum of deliciousness
 * equal to a power of two.
 *
 * You can pick any two different foods to make a good meal.
 *
 * Given an array of integers deliciousness where deliciousness[i] is the deliciousness of the
 * ith item of food, return the number of different good meals you can make from this list
 * modulo 109 + 7.
 *
 * Note that items with different indices are considered different even if they have the same
 * deliciousness value.
 */

/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
  const MOD = 1e9 + 7;
  const frequency = new Map();
  let result = 0;

  for (const value of deliciousness) {
    for (let power = 1; power <= 1 << 21; power <<= 1) {
      const complement = power - value;
      if (frequency.has(complement)) {
        result = (result + frequency.get(complement)) % MOD;
      }
    }
    frequency.set(value, (frequency.get(value) || 0) + 1);
  }

  return result;
};
