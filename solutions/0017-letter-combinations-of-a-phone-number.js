/**
 * 17. Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Difficulty: Medium
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent. Return the answer
 * in any order.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is
 * given below. Note that 1 does not map to any letters.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits || !digits.length) return [];

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  if (digits.length === 1) {
    return map[digits].split('');
  }

  const result = [];
  const group1 = letterCombinations(digits.substr(0, 1));
  const group2 = letterCombinations(digits.substr(1));

  for (let i = 0; i < group1.length; i++) {
    for (let j = 0; j < group2.length; j++) {
      result.push(group1[i] + group2[j]);
    }
  }

  return result;
};
