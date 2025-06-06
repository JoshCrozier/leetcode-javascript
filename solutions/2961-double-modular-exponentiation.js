/**
 * 2961. Double Modular Exponentiation
 * https://leetcode.com/problems/double-modular-exponentiation/
 * Difficulty: Medium
 *
 * You are given a 0-indexed 2D array variables where variables[i] = [ai, bi, ci, mi], and an
 * integer target.
 *
 * An index i is good if the following formula holds:
 * - 0 <= i < variables.length
 * - ((aibi % 10)ci) % mi == target
 *
 * Return an array consisting of good indices in any order.
 */

/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function(variables, target) {
  const result = [];

  for (let i = 0; i < variables.length; i++) {
    const [base, exp1, exp2, modulus] = variables[i];

    let inner = 1;
    for (let j = 0; j < exp1; j++) {
      inner = (inner * base) % 10;
    }

    let count = 1;
    for (let j = 0; j < exp2; j++) {
      count = (count * inner) % modulus;
    }

    if (count === target) {
      result.push(i);
    }
  }

  return result;
};
