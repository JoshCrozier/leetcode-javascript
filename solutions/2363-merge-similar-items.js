/**
 * 2363. Merge Similar Items
 * https://leetcode.com/problems/merge-similar-items/
 * Difficulty: Easy
 *
 * You are given two 2D integer arrays, items1 and items2, representing two sets of items.
 * Each array items has the following properties:
 * - items[i] = [valuei, weighti] where valuei represents the value and weighti represents
 *   the weight of the ith item.
 * - The value of each item in items is unique.
 *
 * Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of
 * weights of all items with value valuei.
 *
 * Note: ret should be returned in ascending order by value.
 */

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
  const map = new Map();

  for (const [value, weight] of items1) {
    map.set(value, (map.get(value) || 0) + weight);
  }

  for (const [value, weight] of items2) {
    map.set(value, (map.get(value) || 0) + weight);
  }

  const merged = [];
  for (const [value, weight] of map) {
    merged.push([value, weight]);
  }

  return merged.sort((a, b) => a[0] - b[0]);
};
