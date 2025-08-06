/**
 * 3479. Fruits Into Baskets III
 * https://leetcode.com/problems/fruits-into-baskets-iii/
 * Difficulty: Medium
 *
 * You are given two arrays of integers, fruits and baskets, each of length n, where fruits[i]
 * represents the quantity of the ith type of fruit, and baskets[j] represents the capacity of
 * the jth basket.
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
  const n = fruits.length;
  const bucketSize = Math.ceil(Math.sqrt(n));
  const buckets = Array.from({ length: bucketSize }, () => []);

  for (let i = 0; i < baskets.length; i++) {
    const bucketIndex = Math.floor(i / bucketSize);
    buckets[bucketIndex].push([baskets[i], i]);
  }

  for (const bucket of buckets) {
    bucket.sort((a, b) => a[0] - b[0]);
  }

  let result = 0;
  for (const fruitQuantity of fruits) {
    let placed = false;

    for (const bucket of buckets) {
      if (bucket.length > 0 && bucket[bucket.length - 1][0] >= fruitQuantity) {
        let chosenIndex = -1;
        let minBasketIndex = Infinity;

        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i][0] >= fruitQuantity && bucket[i][1] < minBasketIndex) {
            chosenIndex = i;
            minBasketIndex = bucket[i][1];
          }
        }

        if (chosenIndex !== -1) {
          bucket.splice(chosenIndex, 1);
          placed = true;
          break;
        }
      }
    }

    if (!placed) {
      result++;
    }
  }

  return result;
};
