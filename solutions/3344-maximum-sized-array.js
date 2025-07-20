/**
 * 3344. Maximum Sized Array
 * https://leetcode.com/problems/maximum-sized-array/
 * Difficulty: Medium
 *
 * Given a positive integer s, let A be a 3D array of dimensions n × n × n, where each
 * element A[i][j][k] is defined as:
 * - A[i][j][k] = i * (j OR k), where 0 <= i, j, k < n.
 *
 * Return the maximum possible value of n such that the sum of all elements in array A
 * does not exceed s.
 */

/**
 * @param {number} s
 * @return {number}
 */
var maxSizedArray = function(s) {
  let left = Math.floor(Math.pow(4 * s, 0.2) / 2);
  let right = Math.floor(Math.sqrt(2 * Math.sqrt(s))) + 2;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (calculateArraySum(mid) > s) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left - 1;

  function getBitOnesCount(n, bitPosition) {
    const blockSize = 1 << bitPosition;
    const cycleSize = 1 << (bitPosition + 1);
    const fullCycles = Math.floor(n / cycleSize);
    const remainder = n % cycleSize;

    return fullCycles * blockSize + (remainder > blockSize ? remainder - blockSize : 0);
  }

  function calculateArraySum(n) {
    let totalSum = 0;

    for (let bitPos = 0; (1 << bitPos) < n; bitPos++) {
      const onesCount = getBitOnesCount(n, bitPos);
      const zerosCount = n - onesCount;

      totalSum += (n * n - zerosCount * zerosCount) * (1 << bitPos);
    }

    return totalSum * (n - 1) * n / 2;
  }
};
