/**
 * 1619. Mean of Array After Removing Some Elements
 * https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
 * Difficulty: Easy
 *
 * Given an integer array arr, return the mean of the remaining integers after removing the
 * smallest 5% and the largest 5% of the elements.
 *
 * Answers within 10-5 of the actual answer will be considered accepted.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const trimSize = numbers.length * 0.05;
  const trimmedNumbers = sortedNumbers.slice(trimSize, -trimSize);
  const sum = trimmedNumbers.reduce((acc, num) => acc + num, 0);

  return sum / trimmedNumbers.length;
};
