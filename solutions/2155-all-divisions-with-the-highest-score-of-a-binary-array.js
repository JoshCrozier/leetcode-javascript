/**
 * 2155. All Divisions With the Highest Score of a Binary Array
 * https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/
 * Difficulty: Medium
 *
 * You are given a 0-indexed binary array nums of length n. nums can be divided at index i
 * (where 0 <= i <= n) into two arrays (possibly empty) numsleft and numsright:
 * - numsleft has all the elements of nums between index 0 and i - 1 (inclusive), while numsright
 *   has all the elements of nums between index i and n - 1 (inclusive).
 * - If i == 0, numsleft is empty, while numsright has all the elements of nums.
 * - If i == n, numsleft has all the elements of nums, while numsright is empty.
 *
 * The division score of an index i is the sum of the number of 0's in numsleft and the number
 * of 1's in numsright.
 *
 * Return all distinct indices that have the highest possible division score. You may return
 * the answer in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function(nums) {
  const result = [0];
  let leftZeros = 0;
  let rightOnes = nums.reduce((sum, num) => sum + num, 0);
  let maxScore = rightOnes;

  for (let i = 0; i < nums.length; i++) {
    leftZeros += nums[i] === 0 ? 1 : 0;
    rightOnes -= nums[i];
    const score = leftZeros + rightOnes;

    if (score > maxScore) {
      maxScore = score;
      result.length = 0;
      result.push(i + 1);
    } else if (score === maxScore) {
      result.push(i + 1);
    }
  }

  return result;
};
