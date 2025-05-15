/**
 * 2171. Removing Minimum Number of Magic Beans
 * https://leetcode.com/problems/removing-minimum-number-of-magic-beans/
 * Difficulty: Medium
 *
 * You are given an array of positive integers beans, where each integer represents the number
 * of magic beans found in a particular magic bag.
 *
 * Remove any number of beans (possibly none) from each bag such that the number of beans in
 * each remaining non-empty bag (still containing at least one bean) is equal. Once a bean
 * has been removed from a bag, you are not allowed to return it to any of the bags.
 *
 * Return the minimum number of magic beans that you have to remove.
 */

/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function(beans) {
  const sortedBeans = beans.sort((a, b) => a - b);
  const totalBeans = sortedBeans.reduce((sum, bean) => sum + bean, 0);
  let result = totalBeans;
  let remaining = totalBeans;

  for (let i = 0; i < sortedBeans.length; i++) {
    remaining -= sortedBeans[i];
    const equalBags = sortedBeans.length - i;
    result = Math.min(result, totalBeans - sortedBeans[i] * equalBags);
  }

  return result;
};
