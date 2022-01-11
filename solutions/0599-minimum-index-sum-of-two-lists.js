/**
 * 599. Minimum Index Sum of Two Lists
 * https://leetcode.com/problems/minimum-index-sum-of-two-lists/
 * Difficulty: Easy
 *
 * Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list
 * of favorite restaurants represented by strings.
 *
 * You need to help them find out their common interest with the least list index sum.
 * If there is a choice tie between answers, output all of them with no order requirement.
 * You could assume there always exists an answer.
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const map = new Map(list1.map((str, index) => [str, index]));

  return list2
    .map((str, index) => map.has(str) ? [map.get(str) + index, str] : null)
    .filter(Boolean)
    .sort(([a], [b]) => a - b)
    .filter(([sum], index, [[lowest]]) => sum === lowest)
    .map(([, str]) => str);
};
