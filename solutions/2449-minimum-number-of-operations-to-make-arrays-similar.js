/**
 * 2449. Minimum Number of Operations to Make Arrays Similar
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/
 * Difficulty: Hard
 *
 * You are given two positive integer arrays nums and target, of the same length.
 *
 * In one operation, you can choose any two distinct indices i and j where 0 <= i,
 * j < nums.length and:
 * - set nums[i] = nums[i] + 2 and
 * - set nums[j] = nums[j] - 2.
 *
 * Two arrays are considered to be similar if the frequency of each element is the same.
 *
 * Return the minimum number of operations required to make nums similar to target. The
 * test cases are generated such that nums can always be similar to target.
 */

/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function(nums, target) {
  const evenNums = nums.filter(num => num % 2 === 0).sort((a, b) => a - b);
  const oddNums = nums.filter(num => num % 2 === 1).sort((a, b) => a - b);
  const evenTarget = target.filter(num => num % 2 === 0).sort((a, b) => a - b);
  const oddTarget = target.filter(num => num % 2 === 1).sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < evenNums.length; i++) {
    if (evenNums[i] > evenTarget[i]) {
      result += (evenNums[i] - evenTarget[i]) / 2;
    }
  }

  for (let i = 0; i < oddNums.length; i++) {
    if (oddNums[i] > oddTarget[i]) {
      result += (oddNums[i] - oddTarget[i]) / 2;
    }
  }

  return result;
};
