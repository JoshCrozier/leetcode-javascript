/**
 * 1220. Count Vowels Permutation
 * https://leetcode.com/problems/count-vowels-permutation/
 * Difficulty: Hard
 *
 * Given an integer n, your task is to count how many strings of length n can be formed under
 * the following rules:
 * - Each character is a lower case vowel ('a', 'e', 'i', 'o', 'u')
 * - Each vowel 'a' may only be followed by an 'e'.
 * - Each vowel 'e' may only be followed by an 'a' or an 'i'.
 * - Each vowel 'i' may not be followed by another 'i'.
 * - Each vowel 'o' may only be followed by an 'i' or a 'u'.
 * - Each vowel 'u' may only be followed by an 'a'.
 *
 * Since the answer may be too large, return it modulo 10^9 + 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  const MOD = 1000000007n;
  let aCount = 1n;
  let eCount = 1n;
  let iCount = 1n;
  let oCount = 1n;
  let uCount = 1n;

  for (let length = 2; length <= n; length++) {
    const prevACount = aCount;
    const prevECount = eCount;
    const prevICount = iCount;
    const prevOCount = oCount;
    const prevUCount = uCount;

    aCount = (prevECount + prevICount + prevUCount) % MOD;
    eCount = (prevACount + prevICount) % MOD;
    iCount = (prevECount + prevOCount) % MOD;
    oCount = (prevICount) % MOD;
    uCount = (prevICount + prevOCount) % MOD;
  }

  const total = aCount + eCount + iCount + oCount + uCount;

  return Number(total % MOD);
};
