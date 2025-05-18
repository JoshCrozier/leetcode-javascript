/**
 * 2293. Min Max Game
 * https://leetcode.com/problems/min-max-game/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums whose length is a power of 2.
 *
 * Apply the following algorithm on nums:
 * 1. Let n be the length of nums. If n == 1, end the process. Otherwise, create a new 0-indexed
 *    integer array newNums of length n / 2.
 * 2. For every even index i where 0 <= i < n / 2, assign the value of newNums[i] as
 *    min(nums[2 * i], nums[2 * i + 1]).
 * 3. For every odd index i where 0 <= i < n / 2, assign the value of newNums[i] as
 *    max(nums[2 * i], nums[2 * i + 1]).
 * 4. Replace the array nums with newNums.
 * 5. Repeat the entire process starting from step 1.
 *
 * Return the last number that remains in nums after applying the algorithm.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
  let array = nums.slice();

  while (array.length > 1) {
    const newArray = new Array(array.length / 2);

    for (let i = 0; i < newArray.length; i++) {
      if (i % 2 === 0) {
        newArray[i] = Math.min(array[2 * i], array[2 * i + 1]);
      } else {
        newArray[i] = Math.max(array[2 * i], array[2 * i + 1]);
      }
    }

    array = newArray;
  }

  return array[0];
};
