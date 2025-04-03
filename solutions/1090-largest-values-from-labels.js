/**
 * 1090. Largest Values From Labels
 * https://leetcode.com/problems/largest-values-from-labels/
 * Difficulty: Medium
 *
 * You are given n item's value and label as two integer arrays values and labels. You are also
 * given two integers numWanted and useLimit.
 *
 * Your task is to find a subset of items with the maximum sum of their values such that:
 * - The number of items is at most numWanted.
 * - The number of items with the same label is at most useLimit.
 *
 * Return the maximum sum.
 */

/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
  const items = values.map((value, index) => ({ value, label: labels[index] }));
  items.sort((a, b) => b.value - a.value);

  const labelCount = new Map();
  let result = 0;
  let itemsUsed = 0;

  for (const { value, label } of items) {
    const currentCount = labelCount.get(label) || 0;
    if (itemsUsed < numWanted && currentCount < useLimit) {
      result += value;
      labelCount.set(label, currentCount + 1);
      itemsUsed++;
    }
  }

  return result;
};
