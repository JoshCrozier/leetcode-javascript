/**
 * 1773. Count Items Matching a Rule
 * https://leetcode.com/problems/count-items-matching-a-rule/
 * Difficulty: Easy
 *
 * You are given an array items, where each items[i] = [typei, colori, namei] describes the type,
 * color, and name of the ith item. You are also given a rule represented by two strings,
 * ruleKey and ruleValue.
 *
 * The ith item is said to match the rule if one of the following is true:
 * - ruleKey == "type" and ruleValue == typei.
 * - ruleKey == "color" and ruleValue == colori.
 * - ruleKey == "name" and ruleValue == namei.
 *
 * Return the number of items that match the given rule.
 */

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  const keyIndex = { type: 0, color: 1, name: 2 };
  let result = 0;

  for (const item of items) {
    if (item[keyIndex[ruleKey]] === ruleValue) {
      result++;
    }
  }

  return result;
};
