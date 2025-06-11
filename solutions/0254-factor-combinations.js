/**
 * 254. Factor Combinations
 * https://leetcode.com/problems/factor-combinations/
 * Difficulty: Medium
 *
 * Numbers can be regarded as the product of their factors.
 *
 * For example, 8 = 2 x 2 x 2 = 2 x 4.
 *
 * Given an integer n, return all possible combinations of its factors. You may return the
 * answer in any order.
 *
 * Note that the factors should be in the range [2, n - 1].
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  const result = [];
  findFactors(n, 2, []);
  return result;

  function findFactors(currentNum, start, combination) {
    for (let i = start; i * i <= currentNum; i++) {
      if (currentNum % i === 0) {
        const nextNum = currentNum / i;
        if (nextNum >= i && nextNum < currentNum) {
          result.push([...combination, i, nextNum]);
          findFactors(nextNum, i, [...combination, i]);
        }
      }
    }
  }
};
