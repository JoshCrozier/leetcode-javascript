/**
 * 3119. Maximum Number of Potholes That Can Be Fixed
 * https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/
 * Difficulty: Medium
 *
 * You are given a string road, consisting only of characters "x" and ".", where each "x" denotes
 * a pothole and each "." denotes a smooth road, and an integer budget.
 *
 * In one repair operation, you can repair n consecutive potholes for a price of n + 1.
 *
 * Return the maximum number of potholes that can be fixed such that the sum of the prices of all
 * of the fixes doesn't go over the given budget.
 */

/**
 * @param {string} road
 * @param {number} budget
 * @return {number}
 */
var maxPotholes = function(road, budget) {
  const potholeSections = [];
  let currentLength = 0;

  for (const char of road) {
    if (char === 'x') {
      currentLength++;
    } else {
      if (currentLength > 0) {
        potholeSections.push(currentLength);
        currentLength = 0;
      }
    }
  }

  if (currentLength > 0) {
    potholeSections.push(currentLength);
  }

  potholeSections.sort((a, b) => (a + 1) / a - (b + 1) / b);

  let result = 0;
  let remainingBudget = budget;
  for (const sectionLength of potholeSections) {
    const costToFixAll = sectionLength + 1;

    if (costToFixAll <= remainingBudget) {
      result += sectionLength;
      remainingBudget -= costToFixAll;
    } else {
      const maxFixable = Math.max(0, remainingBudget - 1);
      result += Math.min(maxFixable, sectionLength);
      break;
    }
  }

  return result;
};
