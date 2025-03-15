/**
 * 793. Preimage Size of Factorial Zeroes Function
 * https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/
 * Difficulty: Hard
 *
 * Let f(x) be the number of zeroes at the end of x!. Recall that x! = 1 * 2 * 3 * ... * x
 * and by convention, 0! = 1.
 *
 * For example, f(3) = 0 because 3! = 6 has no zeroes at the end, while f(11) = 2 because
 * 11! = 39916800 has two zeroes at the end.
 *
 * Given an integer k, return the number of non-negative integers x have the property that f(x) = k.
 */

/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(k) {
  return findUpperBound(k) - findLowerBound(k);
};

function findLowerBound(k) {
  let left = 0;
  let right = 5 * (10 ** 10);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const zeroes = countTrailingZeroes(mid);

    if (zeroes < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

function findUpperBound(k) {
  let left = 0;
  let right = 5 * (10 ** 10);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const zeroes = countTrailingZeroes(mid);

    if (zeroes <= k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

function countTrailingZeroes(n) {
  let count = 0;
  let powerOfFive = 5;

  while (n >= powerOfFive) {
    count += Math.floor(n / powerOfFive);
    powerOfFive *= 5;
  }

  return count;
}
