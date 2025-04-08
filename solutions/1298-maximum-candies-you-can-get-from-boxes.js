/**
 * 1298. Maximum Candies You Can Get from Boxes
 * https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/
 * Difficulty: Hard
 *
 * You have n boxes labeled from 0 to n - 1. You are given four arrays: status, candies, keys, and
 * containedBoxes where:
 * - status[i] is 1 if the ith box is open and 0 if the ith box is closed,
 * - candies[i] is the number of candies in the ith box,
 * - keys[i] is a list of the labels of the boxes you can open after opening the ith box.
 * - containedBoxes[i] is a list of the boxes you found inside the ith box.
 *
 * You are given an integer array initialBoxes that contains the labels of the boxes you initially
 * have. You can take all the candies in any open box and you can use the keys in it to open new
 * boxes and you also can use the boxes you find in it.
 *
 * Return the maximum number of candies you can get following the rules above.
 */

/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
  let totalCandies = 0;
  const queue = [...initialBoxes];
  const availableKeys = new Set();
  const unopenedBoxes = new Set();

  while (queue.length) {
    const currentBox = queue.shift();

    if (status[currentBox]) {
      totalCandies += candies[currentBox];
      for (const key of keys[currentBox]) availableKeys.add(key);
      for (const box of containedBoxes[currentBox]) queue.push(box);
    } else {
      unopenedBoxes.add(currentBox);
    }

    for (const box of unopenedBoxes) {
      if (availableKeys.has(box)) {
        status[box] = 1;
        unopenedBoxes.delete(box);
        queue.push(box);
      }
    }
  }

  return totalCandies;
};
