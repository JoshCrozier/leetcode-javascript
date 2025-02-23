/**
 * 385. Mini Parser
 * https://leetcode.com/problems/mini-parser/
 * Difficulty: Medium
 *
 * Given a string s represents the serialization of a nested list, implement a parser to deserialize
 * it and return the deserialized NestedInteger.
 *
 * Each element is either an integer or a list whose elements may also be integers or other lists.
 */

/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
  return traverse(JSON.parse(s));

  function traverse(str) {
    if (Number.isInteger(str)) {
      return new NestedInteger(str);
    }
    const value = new NestedInteger();
    for (const s of str) {
      value.add(traverse(s));
    }
    return value;
  };
};
