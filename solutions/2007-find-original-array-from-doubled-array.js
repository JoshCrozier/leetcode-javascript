/**
 * 2007. Find Original Array From Doubled Array
 * https://leetcode.com/problems/find-original-array-from-doubled-array/
 * Difficulty: Medium
 *
 * An integer array original is transformed into a doubled array changed by appending twice the
 * value of every element in original, and then randomly shuffling the resulting array.
 *
 * Given an array changed, return original if changed is a doubled array. If changed is not a
 * doubled array, return an empty array. The elements in original may be returned in any order.
 */

/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
  if (changed.length % 2 !== 0) return [];

  const frequency = new Map();
  const result = [];

  changed.sort((a, b) => a - b);

  for (const num of changed) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  for (const num of changed) {
    if (frequency.get(num) === 0) continue;

    frequency.set(num, frequency.get(num) - 1);

    const doubled = num * 2;
    if (!frequency.has(doubled) || frequency.get(doubled) === 0) return [];

    frequency.set(doubled, frequency.get(doubled) - 1);
    result.push(num);
  }

  return result;
};
