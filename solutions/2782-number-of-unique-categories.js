/**
 * 2782. Number of Unique Categories
 * https://leetcode.com/problems/number-of-unique-categories/
 * Difficulty: Medium
 *
 * You are given an integer n and an object categoryHandler of class CategoryHandler.
 *
 * There are n elements, numbered from 0 to n - 1. Each element has a category, and your task
 * is to find the number of unique categories.
 *
 * The class CategoryHandler contains the following function, which may help you:
 * - boolean haveSameCategory(integer a, integer b): Returns true if a and b are in the same
 *   category and false otherwise. Also, if either a or b is not a valid number (i.e. it's greater
 *   than or equal to nor less than 0), it returns false.
 *
 * Return the number of unique categories.
 */

/**
 * Definition for a category handler.
 * class CategoryHandler {
 *     @param {number[]} categories
 *     constructor(categories);
 *
 *     @param {number} a
 *     @param {number} b
 *     @return {boolean}
 *     haveSameCategory(a, b);
 * }
 */
/**
 * @param {number} n
 * @param {CategoryHandler} categoryHandler
 * @return {number}
 */
var numberOfCategories = function(n, categoryHandler) {
  let result = 0;

  for (let j = 0; j < n; j++) {
    let isNewCategory = true;

    for (let i = 0; i < j; i++) {
      if (categoryHandler.haveSameCategory(i, j)) {
        isNewCategory = false;
        break;
      }
    }

    if (isNewCategory) {
      result++;
    }
  }

  return result;
};
