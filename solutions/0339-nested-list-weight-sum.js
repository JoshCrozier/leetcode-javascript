/**
 * 339. Nested List Weight Sum
 * https://leetcode.com/problems/nested-list-weight-sum/
 * Difficulty: Medium
 *
 * You are given a nested list of integers nestedList. Each element is either an integer or
 * a list whose elements may also be integers or other lists.
 *
 * The depth of an integer is the number of lists that it is inside of. For example, the nested
 * list [1,[2,2],[[3],2],1] has each integer's value set to its depth.
 *
 * Return the sum of each integer in nestedList multiplied by its depth.
 */

/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
  return calculateDepth(nestedList, 1);

  function calculateDepth(list, depth) {
    let total = 0;
    for (const element of list) {
      if (element.isInteger()) {
        total += element.getInteger() * depth;
      } else {
        total += calculateDepth(element.getList(), depth + 1);
      }
    }
    return total;
  }
};
