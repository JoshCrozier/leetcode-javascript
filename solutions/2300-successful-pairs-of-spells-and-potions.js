/**
 * 2300. Successful Pairs of Spells and Potions
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
 * Difficulty: Medium
 *
 * You are given two positive integer arrays spells and potions, of length n and m respectively,
 * where spells[i] represents the strength of the ith spell and potions[j] represents the strength
 * of the jth potion.
 *
 * You are also given an integer success. A spell and potion pair is considered successful if the
 * product of their strengths is at least success.
 *
 * Return an integer array pairs of length n where pairs[i] is the number of potions that will form
 * a successful pair with the ith spell.
 */

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  const result = [];
  potions.sort((a, b) => a - b);

  for (let i = 0; i < spells.length; i++) {
    let left = 0;
    let right = potions.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (spells[i] * potions[mid] < success) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    result[i] = potions.length - left;
  }

  return result;
};
