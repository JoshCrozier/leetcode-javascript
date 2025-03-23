/**
 * 904. Fruit Into Baskets
 * https://leetcode.com/problems/fruit-into-baskets/
 * Difficulty: Medium
 *
 * You are visiting a farm that has a single row of fruit trees arranged from left to right.
 * The trees are represented by an integer array fruits where fruits[i] is the type of fruit
 * the ith tree produces.
 *
 * You want to collect as much fruit as possible. However, the owner has some strict rules
 * that you must follow:
 * - You only have two baskets, and each basket can only hold a single type of fruit. There
 *   is no limit on the amount of fruit each basket can hold.
 * - Starting from any tree of your choice, you must pick exactly one fruit from every tree
 *   (including the start tree) while moving to the right. The picked fruits must fit in one
 *   of your baskets.
 * - Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
 *
 * Given the integer array fruits, return the maximum number of fruits you can pick.
 */

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  const map = new Map();
  let result = 0;
  let start = 0;

  for (let end = 0; end < fruits.length; end++) {
    map.set(fruits[end], (map.get(fruits[end]) || 0) + 1);

    while (map.size > 2) {
      map.set(fruits[start], map.get(fruits[start]) - 1);
      if (map.get(fruits[start]) === 0) {
        map.delete(fruits[start]);
      }
      start++;
    }

    result = Math.max(result, end - start + 1);
  }

  return result;
};
