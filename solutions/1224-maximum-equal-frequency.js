/**
 * 1224. Maximum Equal Frequency
 * https://leetcode.com/problems/maximum-equal-frequency/
 * Difficulty: Hard
 *
 * Given an array nums of positive integers, return the longest possible length of an array prefix
 * of nums, such that it is possible to remove exactly one element from this prefix so that every
 * number that has appeared in it will have the same number of occurrences.
 *
 * If after removing one element there are no remaining elements, it's still considered that every
 * appeared number has the same number of ocurrences (0).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) {
  const countMap = new Map();
  const freqMap = new Map();
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const prevCount = countMap.get(num) || 0;
    const newCount = prevCount + 1;

    countMap.set(num, newCount);

    if (prevCount > 0) {
      freqMap.set(prevCount, (freqMap.get(prevCount) || 0) - 1);
      if (freqMap.get(prevCount) === 0) freqMap.delete(prevCount);
    }
    freqMap.set(newCount, (freqMap.get(newCount) || 0) + 1);

    if (freqMap.size === 1) {
      const [freq, occurrences] = [...freqMap.entries()][0];
      if (freq === 1 || occurrences === 1) result = i + 1;
    } else if (freqMap.size === 2) {
      const freqs = [...freqMap.keys()].sort((a, b) => a - b);
      if (freqs[0] === 1 && freqMap.get(freqs[0]) === 1) result = i + 1;
      if (freqs[1] === freqs[0] + 1 && freqMap.get(freqs[1]) === 1) result = i + 1;
    }
  }

  return result;
};
