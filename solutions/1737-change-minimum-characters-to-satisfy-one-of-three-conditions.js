/**
 * 1737. Change Minimum Characters to Satisfy One of Three Conditions
 * https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/
 * Difficulty: Medium
 *
 * You are given two strings a and b that consist of lowercase letters. In one operation, you can
 * change any character in a or b to any lowercase letter.
 *
 * Your goal is to satisfy one of the following three conditions:
 * - Every letter in a is strictly less than every letter in b in the alphabet.
 * - Every letter in b is strictly less than every letter in a in the alphabet.
 * - Both a and b consist of only one distinct letter.
 *
 * Return the minimum number of operations needed to achieve your goal.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function(a, b) {
  const aFreq = getFrequency(a);
  const bFreq = getFrequency(b);

  const condition1 = operationsForCondition1(aFreq, bFreq);
  const condition2 = operationsForCondition1(bFreq, aFreq);
  const condition3 = operationsForCondition3(aFreq, bFreq);

  return Math.min(condition1, condition2, condition3);

  function getFrequency(str) {
    const freq = Array(26).fill(0);
    for (const char of str) {
      freq[char.charCodeAt(0) - 97]++;
    }
    return freq;
  }

  function operationsForCondition1(aFreq, bFreq) {
    let minOps = Infinity;
    for (let i = 0; i < 25; i++) {
      let ops = 0;
      for (let j = 0; j <= i; j++) ops += aFreq[j];
      for (let j = i + 1; j < 26; j++) ops += bFreq[j];
      minOps = Math.min(minOps, ops);
    }
    return minOps;
  }

  function operationsForCondition3(aFreq, bFreq) {
    let minOps = Infinity;
    for (let i = 0; i < 26; i++) {
      const ops = a.length + b.length - aFreq[i] - bFreq[i];
      minOps = Math.min(minOps, ops);
    }
    return minOps;
  }
};
