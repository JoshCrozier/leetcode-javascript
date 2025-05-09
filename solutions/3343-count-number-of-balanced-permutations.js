/**
 * 3343. Count Number of Balanced Permutations
 * https://leetcode.com/problems/count-number-of-balanced-permutations/
 * Difficulty: Hard
 *
 * You are given a string num. A string of digits is called balanced if the sum of the digits
 * at even indices is equal to the sum of the digits at odd indices.
 *
 * Return the number of distinct permutations of num that are balanced.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 *
 * A permutation is a rearrangement of all the characters of a string.
 */

/**
 * @param {string} num
 * @return {number}
 */
var countBalancedPermutations = function(num) {
  const MOD = 1e9 + 7;
  const n = num.length;
  const digitCounts = new Array(10).fill(0);
  let totalSum = 0;

  for (const char of num) {
    const digit = parseInt(char);
    digitCounts[digit]++;
    totalSum += digit;
  }

  if (totalSum % 2) return 0;

  const memo = new Map();

  function combination(n, r) {
    if (r > n) return 0;
    if (r === 0 || r === n) return 1;
    if (r > n - r) r = n - r;

    let result = 1n;
    for (let i = 0; i < r; i++) {
      result = result * BigInt(n - i) / BigInt(i + 1);
    }
    return Number(result % BigInt(MOD));
  }

  function exploreDigits(digit, oddSlots, evenSlots, targetBalance) {
    if (oddSlots === 0 && evenSlots === 0 && targetBalance === 0) return 1;
    if (digit < 0 || oddSlots < 0 || evenSlots < 0 || targetBalance < 0) return 0;

    const key = `${digit},${oddSlots},${evenSlots},${targetBalance}`;
    if (memo.has(key)) return memo.get(key);

    let result = 0;
    for (let oddCount = 0; oddCount <= digitCounts[digit]; oddCount++) {
      const evenCount = digitCounts[digit] - oddCount;
      const ways = (BigInt(combination(oddSlots, oddCount))
        * BigInt(combination(evenSlots, evenCount))) % BigInt(MOD);
      const next = BigInt(exploreDigits(digit - 1, oddSlots - oddCount,
        evenSlots - evenCount, targetBalance - digit * oddCount));
      result = (result + Number((ways * next) % BigInt(MOD))) % MOD;
    }

    memo.set(key, result);
    return result;
  }

  return exploreDigits(9, n - Math.floor(n / 2), Math.floor(n / 2), totalSum / 2);
};
