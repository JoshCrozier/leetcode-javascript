/**
 * 1388. Pizza With 3n Slices
 * https://leetcode.com/problems/pizza-with-3n-slices/
 * Difficulty: Hard
 *
 * There is a pizza with 3n slices of varying size, you and your friends will take slices
 * of pizza as follows:
 * - You will pick any pizza slice.
 * - Your friend Alice will pick the next slice in the anti-clockwise direction of your pick.
 * - Your friend Bob will pick the next slice in the clockwise direction of your pick.
 * - Repeat until there are no more slices of pizzas.
 *
 * Given an integer array slices that represent the sizes of the pizza slices in a clockwise
 * direction, return the maximum possible sum of slice sizes that you can pick.
 */

/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function(slices) {
  const n = slices.length;
  const count = n / 3;
  const case1 = selectMaxSum(slices, count - 1, 2, n - 2);
  const case2 = selectMaxSum(slices, count, 1, n - 1);

  return Math.max(slices[0] + case1, case2);

  function selectMaxSum(arr, count, start, end, memo = new Map()) {
    const key = `${count},${start},${end}`;
    if (count === 0 || start > end) return 0;
    if (memo.has(key)) return memo.get(key);

    const includeFirst = arr[start] + selectMaxSum(arr, count - 1, start + 2, end, memo);
    const excludeFirst = selectMaxSum(arr, count, start + 1, end, memo);
    const result = Math.max(includeFirst, excludeFirst);

    memo.set(key, result);
    return result;
  }
};
