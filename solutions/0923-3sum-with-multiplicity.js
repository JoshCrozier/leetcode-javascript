/**
 * 923. 3Sum With Multiplicity
 * https://leetcode.com/problems/3sum-with-multiplicity/
 * Difficulty: Medium
 *
 * Given an integer array arr, and an integer target, return the number of tuples i, j, k such
 * that i < j < k and arr[i] + arr[j] + arr[k] == target.
 *
 * As the answer can be very large, return it modulo 109 + 7.
 */

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
  const MOD = 1e9 + 7;
  const counts = new Map();
  let result = 0;

  for (const num of arr) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  const uniqueNums = [...counts.keys()].sort((a, b) => a - b);

  for (let i = 0; i < uniqueNums.length; i++) {
    const num1 = uniqueNums[i];
    for (let j = i; j < uniqueNums.length; j++) {
      const num2 = uniqueNums[j];
      const num3 = target - num1 - num2;

      if (num3 < num2) continue;

      const count1 = counts.get(num1);
      const count2 = counts.get(num2);
      const count3 = counts.get(num3) || 0;

      if (num1 === num2 && num2 === num3) {
        result = (result + (count1 * (count1 - 1) * (count1 - 2)) / 6) % MOD;
      } else if (num1 === num2) {
        result = (result + (count1 * (count1 - 1) * count3) / 2) % MOD;
      } else if (num2 === num3) {
        result = (result + (count1 * count2 * (count2 - 1)) / 2) % MOD;
      } else {
        result = (result + count1 * count2 * count3) % MOD;
      }
    }
  }

  return result;
};
