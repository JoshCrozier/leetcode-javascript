/**
 * 2442. Count Number of Distinct Integers After Reverse Operations
 * https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/
 * Difficulty: Medium
 *
 * You are given an array nums consisting of positive integers.
 *
 * You have to take each integer in the array, reverse its digits, and add it to the end of the
 * array. You should apply this operation to the original integers in nums.
 *
 * Return the number of distinct integers in the final array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
  const set = new Set(nums);

  for (const num of nums) {
    let reversed = 0;
    let temp = num;
    while (temp > 0) {
      reversed = reversed * 10 + temp % 10;
      temp = Math.floor(temp / 10);
    }
    set.add(reversed);
  }

  return set.size;
};
