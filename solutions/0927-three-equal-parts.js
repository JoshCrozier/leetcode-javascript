/**
 * 927. Three Equal Parts
 * https://leetcode.com/problems/three-equal-parts/
 * Difficulty: Hard
 *
 * You are given an array arr which consists of only zeros and ones, divide the array into three
 * non-empty parts such that all of these parts represent the same binary value.
 *
 * If it is possible, return any [i, j] with i + 1 < j, such that:
 * - arr[0], arr[1], ..., arr[i] is the first part,
 * - arr[i + 1], arr[i + 2], ..., arr[j - 1] is the second part, and
 * - arr[j], arr[j + 1], ..., arr[arr.length - 1] is the third part.
 * - All three parts have equal binary values.
 *
 * If it is not possible, return [-1, -1].
 *
 * Note that the entire part is used when considering what binary value it represents. For example,
 * [1,1,0] represents 6 in decimal, not 3. Also, leading zeros are allowed, so [0,1,1] and [1,1]
 * represent the same value.
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function(arr) {
  const totalOnes = arr.reduce((sum, num) => sum + num, 0);
  if (totalOnes % 3 !== 0) {
    return [-1, -1];
  }
  if (totalOnes === 0) {
    return [0, arr.length - 1];
  }

  const onesPerPart = totalOnes / 3;
  let firstStart = -1;
  let secondStart = -1;
  let thirdStart = -1;
  let onesCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      onesCount++;
      if (onesCount === 1) firstStart = i;
      if (onesCount === onesPerPart + 1) secondStart = i;
      if (onesCount === 2 * onesPerPart + 1) thirdStart = i;
    }
  }

  const patternLength = arr.length - thirdStart;
  if (secondStart - firstStart < patternLength || thirdStart - secondStart < patternLength) {
    return [-1, -1];
  }
  for (let i = 0; i < patternLength; i++) {
    if (arr[firstStart + i] !== arr[secondStart + i]
        || arr[firstStart + i] !== arr[thirdStart + i]) {
      return [-1, -1];
    }
  }

  const i = firstStart + patternLength - 1;
  const j = secondStart + patternLength;

  return [i, j];
};
