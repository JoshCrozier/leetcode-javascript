/**
 * 1268. Search Suggestions System
 * https://leetcode.com/problems/search-suggestions-system/
 * Difficulty: Medium
 *
 * You are given an array of strings products and a string searchWord.
 *
 * Design a system that suggests at most three product names from products after each
 * character of searchWord is typed. Suggested products should have common prefix with
 * searchWord. If there are more than three products with a common prefix return the
 * three lexicographically minimums products.
 *
 * Return a list of lists of the suggested products after each character of searchWord
 * is typed.
 */

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  products.sort();
  const result = new Array(searchWord.length);
  for (let i = 0; i < searchWord.length; i++) {
    products = products.filter((word) => word[i] === searchWord[i]);
    result[i] = products.slice(0, 3);
  }
  return result;
};
