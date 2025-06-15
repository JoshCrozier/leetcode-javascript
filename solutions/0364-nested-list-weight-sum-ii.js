/**
 * 364. Nested List Weight Sum II
 * https://leetcode.com/problems/nested-list-weight-sum-ii/
 * Difficulty: Medium
 *
 * You are given a nested list of integers nestedList. Each element is either an integer or
 * a list whose elements may also be integers or other lists.
 *
 * The depth of an integer is the number of lists that it is inside of. For example, the
 * nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth. Let maxDepth
 * be the maximum depth of any integer.
 *
 * The weight of an integer is maxDepth - (the depth of the integer) + 1.
 *
 * Return the sum of each integer in nestedList multiplied by its weight.
 */

/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
  const maxDepth = findMaxDepth(nestedList, 1);
  return calculateSum(nestedList, 1, maxDepth);

  function findMaxDepth(list, depth) {
    let maxDepth = depth;
    for (const element of list) {
      if (!element.isInteger()) {
        maxDepth = Math.max(maxDepth, findMaxDepth(element.getList(), depth + 1));
      }
    }
    return maxDepth;
  }

  function calculateSum(list, depth, maxDepth) {
    let total = 0;
    for (const element of list) {
      if (element.isInteger()) {
        total += element.getInteger() * (maxDepth - depth + 1);
      } else {
        total += calculateSum(element.getList(), depth + 1, maxDepth);
      }
    }
    return total;
  }
};
