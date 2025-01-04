/**
 * 605. Can Place Flowers
 * https://leetcode.com/problems/can-place-flowers/
 * Difficulty: Easy
 *
 * You have a long flowerbed in which some of the plots are planted, and some are not.
 * However, flowers cannot be planted in adjacent plots.
 *
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1
 * means not empty, and an integer n, return true if n new flowers can be planted in
 * the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      count++;
      flowerbed[i] = 1;
    }
  }
  return count >= n;
};
