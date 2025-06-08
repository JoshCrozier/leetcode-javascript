/**
 * 3074. Apple Redistribution into Boxes
 * https://leetcode.com/problems/apple-redistribution-into-boxes/
 * Difficulty: Easy
 *
 * You are given an array apple of size n and an array capacity of size m.
 *
 * There are n packs where the ith pack contains apple[i] apples. There are m boxes as well,
 * and the ith box has a capacity of capacity[i] apples.
 *
 * Return the minimum number of boxes you need to select to redistribute these n packs of
 * apples into boxes.
 *
 * Note that, apples from the same pack can be distributed into different boxes.
 */

/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
  const totalApples = apple.reduce((sum, num) => sum + num, 0);
  const sortedCapacities = capacity.sort((a, b) => b - a);
  let currentCapacity = 0;
  let result = 0;

  for (const box of sortedCapacities) {
    if (currentCapacity < totalApples) {
      currentCapacity += box;
      result++;
    } else {
      break;
    }
  }

  return result;
};
