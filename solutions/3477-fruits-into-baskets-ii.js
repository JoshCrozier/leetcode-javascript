/**
 * 3477. Fruits Into Baskets II
 * https://leetcode.com/problems/fruits-into-baskets-ii/
 * Difficulty: Easy
 *
 * You are given two arrays of integers, fruits and baskets, each of length n, where
 * fruits[i] represents the quantity of the ith type of fruit, and baskets[j] represents
 * the capacity of the jth basket.
 *
 * From left to right, place the fruits according to these rules:
 * - Each fruit type must be placed in the leftmost available basket with a capacity greater
 *   than or equal to the quantity of that fruit type.
 * - Each basket can hold only one type of fruit.
 * - If a fruit type cannot be placed in any basket, it remains unplaced.
 *
 * Return the number of fruit types that remain unplaced after all possible allocations are made.
 */

/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
  const availableBaskets = [...baskets];
  let result = 0;

  for (const fruitQuantity of fruits) {
    let placed = false;

    for (let i = 0; i < availableBaskets.length; i++) {
      if (availableBaskets[i] >= fruitQuantity) {
        availableBaskets[i] = 0;
        placed = true;
        break;
      }
    }

    if (!placed) {
      result++;
    }
  }

  return result;
};
