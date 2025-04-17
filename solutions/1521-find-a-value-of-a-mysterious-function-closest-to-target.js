/**
 * 1521. Find a Value of a Mysterious Function Closest to Target
 * https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/
 * Difficulty: Hard
 *
 * Winston was given the above mysterious function func. He has an integer array arr and an integer
 * target and he wants to find the values l and r that make the value |func(arr, l, r) - target|
 * minimum possible.
 *
 * Return the minimum possible value of |func(arr, l, r) - target|.
 *
 * Notice that func should be called with the values l and r where 0 <= l, r < arr.length.
 */

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var closestToTarget = function(arr, target) {
  let result = Infinity;
  let seen = new Set();

  for (let right = 0; right < arr.length; right++) {
    const current = new Set([arr[right]]);
    result = Math.min(result, Math.abs(arr[right] - target));

    for (const previous of seen) {
      const currentAnd = previous & arr[right];
      current.add(currentAnd);
      result = Math.min(result, Math.abs(currentAnd - target));
    }

    seen = current;
  }

  return result;
};
